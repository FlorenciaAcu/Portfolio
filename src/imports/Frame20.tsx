function Frame19() {
  return (
    <input 
      type="email"
      id="email"
      placeholder="tu.email@ejemplo.com"
      required
      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
    />
  );
}

export default function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative size-full">
      <p className="font-['Outfit:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[14px] text-black text-center text-nowrap whitespace-pre">Correo electrónico</p>
      <Frame19 />
    </div>
  );
}