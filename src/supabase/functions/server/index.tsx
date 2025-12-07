import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-e28e55bd/health", (c) => {
  return c.json({ status: "ok" });
});

// Send email endpoint
app.post("/make-server-e28e55bd/send-email", async (c) => {
  try {
    console.log('Received email request');
    const body = await c.req.json();
    const { name, email, message } = body;

    console.log('Request data:', { name, email: email ? 'provided' : 'missing', message: message ? 'provided' : 'missing' });

    // Validate required fields
    if (!name || !email || !message) {
      console.log('Missing required fields');
      return c.json({ error: "Todos los campos son requeridos" }, 400);
    }

    // Send email using Resend
    const resendApiKey = Deno.env.get('RESEND_API_KEY');
    if (!resendApiKey) {
      console.error('RESEND_API_KEY not found in environment variables');
      return c.json({ error: "Error de configuración del servidor" }, 500);
    }

    const emailData = {
      from: 'Portfolio <onboarding@resend.dev>',
      to: 'contact@florenciaux.com',
      subject: `Nuevo mensaje de ${name} desde el portfolio`,
      html: `
        <h2>Nuevo mensaje desde el portfolio</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 10px 0;">
          ${message.replace(/\n/g, '<br>')}
        </div>
      `,
      reply_to: email
    };

    console.log('Sending email to Resend API...');
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData),
    });

    const responseText = await response.text();
    console.log('Resend API response status:', response.status);
    console.log('Resend API response:', responseText);

    if (!response.ok) {
      console.error('Resend API error:', responseText);
      return c.json({ error: "Error al enviar el email" }, 500);
    }

    const result = JSON.parse(responseText);
    console.log('Email sent successfully with ID:', result.id);
    
    return c.json({ success: true, message: "Email enviado correctamente" });

  } catch (error) {
    console.error('Server error in send-email:', error);
    return c.json({ error: "Error interno del servidor" }, 500);
  }
});

Deno.serve(app.fetch);