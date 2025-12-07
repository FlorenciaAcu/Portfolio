import svgPaths from "./svg-y0kh5pxyrz";
import imgImage1 from "figma:asset/ef4a39d7a268607b60410299d7ef2ca5d805a2dd.png";
import imgImage2 from "figma:asset/59a67fcb160cbf6ead0a7b55998b86036c90ed06.png";
import imgImage3 from "figma:asset/7a40c55a106529deeb405fed6fc97e215edaf94d.png";

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip relative rounded-bl-[16px] rounded-tl-[16px] shrink-0 size-[500px]" data-name="Container">
      <div className="basis-0 grow min-h-px min-w-px relative rounded-[16px] shrink-0 w-[1104px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[16px] size-full" src={imgImage1} />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex h-[18.5px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[20px] relative shrink-0 text-[#364153] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        2022 - 2025
      </p>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[rgba(243,244,246,0.9)] relative rounded-[1.67772e+07px] shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start justify-center px-[12px] py-[8px] relative">
        <Text />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex gap-[24px] h-[32px] items-center relative shrink-0 w-full" data-name="Heading 3">
      <a className="[white-space-collapse:collapse] block font-['DM_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#101828] text-[24px] text-nowrap" href="https://cintelink.com/views/login/" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="[text-underline-position:from-font] cursor-pointer decoration-solid leading-[32px] underline whitespace-pre">Cintelink</p>
      </a>
      <Container1 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['DM_Sans:9pt_Regular',_sans-serif] font-normal grow leading-[26px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[16px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <span className="font-['DM_Sans:Bold',_sans-serif] font-bold" style={{ fontVariationSettings: "'opsz' 14" }}>{`Desafío: `}</span>
        <span style={{ fontVariationSettings: "'opsz' 9" }}>la plataforma necesitaba evolucionar para ofrecer mayor trazabilidad y seguridad en las operaciones de carga de combustible.</span>
      </p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['DM_Sans:9pt_Regular',_sans-serif] font-normal grow leading-[26px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[16px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <span className="font-['DM_Sans:Bold',_sans-serif] font-bold" style={{ fontVariationSettings: "'opsz' 14" }}>{`Lo que hicimos: `}</span>Lideré el rediseño de la experiencia, validando nuevas funciones con usuarios y creando un Design System para mantener coherencia. También trabajé en el equipo de Smart Contracts, integrando blockchain para dar más seguridad.
      </p>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading3 />
      <Paragraph />
      <Paragraph1 />
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-gray-100 h-[22px] relative rounded-[8px] shrink-0" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative">
        <p className="font-['DM_Sans:Medium',_sans-serif] font-medium leading-[16px] relative shrink-0 text-[#364153] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
          Smart Contracts
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Badge1() {
  return (
    <div className="bg-gray-100 h-[22px] relative rounded-[8px] shrink-0" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative">
        <p className="font-['DM_Sans:Medium',_sans-serif] font-medium leading-[16px] relative shrink-0 text-[#364153] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
          Rediseño de producto
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Badge2() {
  return (
    <div className="bg-gray-100 h-[22px] relative rounded-[8px] shrink-0" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative">
        <p className="font-['DM_Sans:Medium',_sans-serif] font-medium leading-[16px] relative shrink-0 text-[#364153] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>{` Design System`}</p>
      </div>
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Badge3() {
  return (
    <div className="bg-gray-100 h-[22px] relative rounded-[8px] shrink-0" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative">
        <p className="font-['DM_Sans:Medium',_sans-serif] font-medium leading-[16px] relative shrink-0 text-[#364153] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
          Mobile
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Badge4() {
  return (
    <div className="bg-gray-100 h-[22px] relative rounded-[8px] shrink-0" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative">
        <p className="font-['DM_Sans:Medium',_sans-serif] font-medium leading-[16px] relative shrink-0 text-[#364153] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
          Desktop
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-center flex flex-wrap gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Badge />
      <Badge1 />
      <Badge2 />
      <Badge3 />
      <Badge4 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M10 2H14V6" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 9.33333L14 2" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p25f66900} id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center px-[11px] py-[8px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Icon />
      <p className="font-['DM_Sans:Medium',_sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Ver en FIgma [WIP]
      </p>
    </div>
  );
}

function Container4() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="flex flex-col justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-start justify-center p-[32px] relative size-full">
          <Container2 />
          <Container3 />
          <Button />
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex gap-[24px] items-center overflow-clip relative w-full">
        <Container />
        <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
          <Container4 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#99a1af] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex h-[18.5px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[20px] relative shrink-0 text-[#364153] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        2021
      </p>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[rgba(243,244,246,0.9)] relative rounded-[1.67772e+07px] shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start justify-center px-[12px] py-[8px] relative">
        <Text1 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex gap-[24px] h-[32px] items-center relative shrink-0 w-full" data-name="Heading 3">
      <a className="[white-space-collapse:collapse] block font-['DM_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#101828] text-[24px] text-nowrap" href="https://cloudlabslearning.com/" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="[text-underline-position:from-font] cursor-pointer decoration-solid leading-[32px] underline whitespace-pre">CloudLabs</p>
      </a>
      <Container6 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['DM_Sans:9pt_Regular',_sans-serif] font-normal grow leading-[26px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[16px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <span className="font-['DM_Sans:Bold',_sans-serif] font-bold" style={{ fontVariationSettings: "'opsz' 14" }}>{`Desafío: `}</span>
        <span style={{ fontVariationSettings: "'opsz' 9" }}>rediseñar la plataforma para unificar la experiencia de estudiantes, docentes e instituciones en un solo sistema, con una arquitectura más clara y escalable.</span>
      </p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['DM_Sans:9pt_Regular',_sans-serif] font-normal grow leading-[26px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[16px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <span className="font-['DM_Sans:Bold',_sans-serif] font-bold" style={{ fontVariationSettings: "'opsz' 14" }}>{`Lo que hicimos: `}</span>
        <span style={{ fontVariationSettings: "'opsz' 9" }}>{`hicimos un rediseño de la arquitectura, unificando la experiencia de los usuarios y sus sistemas para que tanto estudiantes, profesores e instituciones puedan enseñar y aprender a través de laboratorios gamificados en áreas STEM. `}</span>
      </p>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading4 />
      <Paragraph2 />
      <Paragraph3 />
    </div>
  );
}

function Badge5() {
  return (
    <div className="bg-gray-100 h-[22px] relative rounded-[8px] shrink-0" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative">
        <p className="font-['DM_Sans:Medium',_sans-serif] font-medium leading-[16px] relative shrink-0 text-[#364153] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
          EdTech
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Badge6() {
  return (
    <div className="bg-gray-100 h-[22px] relative rounded-[8px] shrink-0" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative">
        <p className="font-['DM_Sans:Medium',_sans-serif] font-medium leading-[16px] relative shrink-0 text-[#364153] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
          Rediseño de producto
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Badge7() {
  return (
    <div className="bg-gray-100 h-[22px] relative rounded-[8px] shrink-0" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative">
        <p className="font-['DM_Sans:Medium',_sans-serif] font-medium leading-[16px] relative shrink-0 text-[#364153] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
          Mobile
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Badge8() {
  return (
    <div className="bg-gray-100 h-[22px] relative rounded-[8px] shrink-0" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative">
        <p className="font-['DM_Sans:Medium',_sans-serif] font-medium leading-[16px] relative shrink-0 text-[#364153] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
          Tablet
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Badge9() {
  return (
    <div className="bg-gray-100 h-[22px] relative rounded-[8px] shrink-0" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative">
        <p className="font-['DM_Sans:Medium',_sans-serif] font-medium leading-[16px] relative shrink-0 text-[#364153] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
          Desktop
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Badge5 />
      <Badge6 />
      <Badge7 />
      <Badge8 />
      <Badge9 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[11px] size-[16px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M10 2H14V6" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 9.33333L14 2" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p25f66900} id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white h-[32px] relative rounded-[8px] shrink-0 w-[148.805px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Icon1 />
      <p className="absolute font-['DM_Sans:Medium',_sans-serif] font-medium leading-[20px] left-[35px] text-[14px] text-neutral-950 text-nowrap top-[5.5px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Ver en Behance
      </p>
    </div>
  );
}

function Container9() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="flex flex-col justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-start justify-center p-[32px] relative size-full">
          <Container7 />
          <Container8 />
          <Button1 />
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-end justify-end overflow-clip relative rounded-br-[16px] rounded-tr-[16px] shrink-0 size-[500px]" data-name="Container">
      <div className="h-[583px] relative shrink-0 w-[500px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex gap-[24px] items-center overflow-clip relative w-full">
        <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
          <Container9 />
        </div>
        <Container10 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#99a1af] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative rounded-bl-[16px] rounded-tl-[16px] shrink-0 size-[500px]" data-name="Container">
      <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage3} />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex h-[18.5px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[20px] relative shrink-0 text-[#364153] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        2021
      </p>
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-[rgba(243,244,246,0.9)] relative rounded-[1.67772e+07px] shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start justify-center px-[12px] py-[8px] relative">
        <Text2 />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex gap-[24px] h-[32px] items-center relative shrink-0 w-full" data-name="Heading 3">
      <p className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[32px] relative shrink-0 text-[#101828] text-[24px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Respública
      </p>
      <Container13 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['DM_Sans:9pt_Regular',_sans-serif] font-normal grow leading-[26px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[16px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <span className="font-['DM_Sans:Bold',_sans-serif] font-bold" style={{ fontVariationSettings: "'opsz' 14" }}>{`Desafío: `}</span>diseñar una aplicación móvil que permita a los ciudadanos crear espacios de debate digital y que los grupos puedan medir y monitorear la participación.
      </p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['DM_Sans:9pt_Regular',_sans-serif] font-normal grow leading-[26px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[16px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <span className="font-['DM_Sans:Bold',_sans-serif] font-bold" style={{ fontVariationSettings: "'opsz' 14" }}>{`Lo que hicimos: `}</span>definimos flujos de creación de debates y participación; diseñamos interfaces móviles claras, estados vacíos, validaciones y microinteracciones; prototipamos y validamos con usuarios.
      </p>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading5 />
      <Paragraph4 />
      <Paragraph5 />
    </div>
  );
}

function Badge10() {
  return (
    <div className="bg-gray-100 h-[22px] relative rounded-[8px] shrink-0" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative">
        <p className="font-['DM_Sans:Medium',_sans-serif] font-medium leading-[16px] relative shrink-0 text-[#364153] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
          Participación ciudadana
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Badge11() {
  return (
    <div className="bg-gray-100 h-[22px] relative rounded-[8px] shrink-0" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative">
        <p className="font-['DM_Sans:Medium',_sans-serif] font-medium leading-[16px] relative shrink-0 text-[#364153] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
          Diseño desde cero
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Badge12() {
  return (
    <div className="bg-gray-100 h-[22px] relative rounded-[8px] shrink-0" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative">
        <p className="font-['DM_Sans:Medium',_sans-serif] font-medium leading-[16px] relative shrink-0 text-[#364153] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
          App movil
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Badge13() {
  return (
    <div className="bg-gray-100 h-[22px] relative rounded-[8px] shrink-0" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative">
        <p className="font-['DM_Sans:Medium',_sans-serif] font-medium leading-[16px] relative shrink-0 text-[#364153] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
          Debate digital
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Badge10 />
      <Badge11 />
      <Badge12 />
      <Badge13 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[11px] size-[16px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M10 2H14V6" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 9.33333L14 2" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p25f66900} id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white h-[32px] relative rounded-[8px] shrink-0 w-[148.805px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Icon2 />
      <p className="absolute font-['DM_Sans:Medium',_sans-serif] font-medium leading-[20px] left-[35px] text-[14px] text-neutral-950 text-nowrap top-[5.5px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Ver en Behance
      </p>
    </div>
  );
}

function Container16() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="flex flex-col justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-start justify-center p-[32px] relative size-full">
          <Container14 />
          <Container15 />
          <Button2 />
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex gap-[24px] items-center overflow-clip relative w-full">
        <Container12 />
        <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
          <Container16 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#99a1af] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

export default function Container18() {
  return (
    <div className="content-stretch flex flex-col gap-[60px] items-start relative size-full" data-name="Container">
      <Container5 />
      <Container11 />
      <Container17 />
    </div>
  );
}