import svgPaths from "./svg-3d9puj8212";
import imgImage from "figma:asset/e3675e1460c029785a0b539151e61f5bdd0ef467.png";
import imgImage1 from "figma:asset/ef4a39d7a268607b60410299d7ef2ca5d805a2dd.png";
import imgImage2 from "figma:asset/59a67fcb160cbf6ead0a7b55998b86036c90ed06.png";
import imgImage3 from "figma:asset/7a40c55a106529deeb405fed6fc97e215edaf94d.png";
import imgImage4 from "figma:asset/e0abbf28a17ec15d989f8edc23d3b97f48f24481.png";

function Container() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] items-center relative">
        <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="image">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgImage} />
        </div>
        <p className="font-['DM_Sans:SemiBold',_sans-serif] font-semibold leading-[28px] relative shrink-0 text-[18px] text-neutral-950 text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
          Florencia Acuña
        </p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="h-[24px] relative shrink-0 w-[39.195px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[39.195px]">
        <p className="absolute font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#4a5565] text-[16px] text-nowrap top-[0.5px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 9" }}>
          Inicio
        </p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[65.563px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[65.563px]">
        <p className="absolute font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#4a5565] text-[16px] text-nowrap top-[0.5px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 9" }}>
          Sobre mí
        </p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[73.43px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[73.43px]">
        <p className="absolute font-['DM_Sans:Bold',_sans-serif] font-bold leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[0.5px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
          Proyectos
        </p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-black h-[36px] relative rounded-[8px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[16px] py-[8px] relative">
        <p className="font-['DM_Sans:Medium',_sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
          Contacto
        </p>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="h-[36px] relative shrink-0" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[32px] h-[36px] items-center relative">
        <Button />
        <Button1 />
        <Button2 />
        <Button3 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[68px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex h-[68px] items-center justify-between px-[24px] py-0 relative w-full">
          <Container />
          <Navigation />
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] h-[69px] relative shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col h-[69px] items-start pb-px pt-0 px-[143.5px] relative w-full">
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[40px] relative shrink-0 w-[1104px]" data-name="Heading 2">
      <p className="absolute font-['DM_Sans:Bold',_sans-serif] font-bold leading-[40px] left-[551.85px] text-[#101828] text-[36px] text-center text-nowrap top-[0.5px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Todos mis proyectos
      </p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[56px] relative shrink-0 w-[768px]" data-name="Paragraph">
      <p className="absolute font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[28px] left-[384.03px] text-[#4a5565] text-[20px] text-center top-0 translate-x-[-50%] w-[715px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        Un recorrido por mi experiencia diseñando productos digitales en distintas industrias y contextos.
      </p>
    </div>
  );
}

function Container2() {
  return <div className="bg-black h-[4px] rounded-[1.67772e+07px] shrink-0 w-[80px]" data-name="Container" />;
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <Paragraph />
      <Container2 />
    </div>
  );
}

function StarSolidFull() {
  return (
    <div className="[grid-area:1_/_1] ml-[311px] mt-[16px] relative size-[32px]" data-name="star-solid-full">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="star-solid-full ">
          <path d={svgPaths.pe14e180} fill="var(--fill-0, #FFAE00)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] h-[200px] ml-0 mt-0 relative w-[432px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
      <StarSolidFull />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip relative rounded-bl-[16px] rounded-tl-[16px] shrink-0" data-name="Container">
      <Group2 />
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

function Container5() {
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
      <Container5 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['DM_Sans:9pt_Regular',_sans-serif] font-normal grow leading-[26px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[16px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <span className="font-['DM_Sans:Bold',_sans-serif] font-bold" style={{ fontVariationSettings: "'opsz' 14" }}>{`Desafío: `}</span>
        <span style={{ fontVariationSettings: "'opsz' 9" }}>la plataforma necesitaba evolucionar para ofrecer mayor trazabilidad y seguridad en las operaciones de carga de combustible.</span>
      </p>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading3 />
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

function Container7() {
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

function Button4() {
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

function Container8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start justify-center p-[16px] relative w-full">
          <Container6 />
          <Container7 />
          <Button4 />
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[14px] self-stretch shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip relative size-full">
        <Container4 />
        <Container8 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#99a1af] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function StarSolidFull1() {
  return (
    <div className="[grid-area:1_/_1] ml-[311.333px] mt-[16px] relative size-[32px]" data-name="star-solid-full">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="star-solid-full ">
          <path d={svgPaths.pe14e180} fill="var(--fill-0, #FFAE00)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full">
      <div className="[grid-area:1_/_1] h-[200px] ml-0 mt-0 relative w-[356.667px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
      <StarSolidFull1 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[200px] items-end justify-end overflow-clip relative rounded-br-[16px] rounded-tr-[16px] shrink-0 w-full" data-name="Container">
      <Group3 />
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

function Container11() {
  return (
    <div className="bg-[rgba(243,244,246,0.9)] relative rounded-[1.67772e+07px] shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start justify-center px-[12px] py-[8px] relative">
        <Text1 />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex gap-[24px] h-[32px] items-center relative shrink-0 w-full" data-name="Heading 3">
      <a className="[white-space-collapse:collapse] block font-['DM_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#101828] text-[24px] text-nowrap" href="https://cloudlabslearning.com/" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="[text-underline-position:from-font] cursor-pointer decoration-solid leading-[32px] underline whitespace-pre">CloudLabs</p>
      </a>
      <Container11 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['DM_Sans:9pt_Regular',_sans-serif] font-normal grow leading-[26px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[16px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <span className="font-['DM_Sans:Bold',_sans-serif] font-bold" style={{ fontVariationSettings: "'opsz' 14" }}>{`Desafío: `}</span>
        <span style={{ fontVariationSettings: "'opsz' 9" }}>{`rediseñar la plataforma para unificar la experiencia de estudiantes, docentes e instituciones en un solo sistema, con una arquitectura clara. `}</span>
      </p>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading5 />
      <Paragraph2 />
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

function Container13() {
  return (
    <div className="content-center flex flex-wrap gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
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

function Button5() {
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

function Container14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start justify-center p-[16px] relative w-full">
          <Container12 />
          <Container13 />
          <Button5 />
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[14px] self-stretch shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip relative size-full">
        <Container10 />
        <Container14 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#99a1af] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function StarSolidFull2() {
  return (
    <div className="[grid-area:1_/_1] ml-[310.667px] mt-[16px] relative size-[32px]" data-name="star-solid-full">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="star-solid-full ">
          <path d={svgPaths.pe14e180} fill="var(--fill-0, #FFAE00)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full">
      <div className="[grid-area:1_/_1] h-[200px] ml-0 mt-0 relative w-[356.667px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage3} />
      </div>
      <StarSolidFull2 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[200px] items-start relative rounded-bl-[16px] rounded-tl-[16px] shrink-0 w-full" data-name="Container">
      <Group4 />
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

function Container17() {
  return (
    <div className="bg-[rgba(243,244,246,0.9)] relative rounded-[1.67772e+07px] shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start justify-center px-[12px] py-[8px] relative">
        <Text2 />
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex gap-[24px] h-[32px] items-center relative shrink-0 w-full" data-name="Heading 3">
      <p className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[32px] relative shrink-0 text-[#101828] text-[24px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Respública
      </p>
      <Container17 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['DM_Sans:9pt_Regular',_sans-serif] font-normal grow leading-[26px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[16px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <span className="font-['DM_Sans:Bold',_sans-serif] font-bold" style={{ fontVariationSettings: "'opsz' 14" }}>{`Desafío: `}</span>diseñar una aplicación móvil que permita a los ciudadanos crear espacios de debate digital y que los grupos puedan medir y monitorear la participación.
      </p>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading6 />
      <Paragraph3 />
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

function Container19() {
  return (
    <div className="content-center flex flex-wrap gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
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

function Button6() {
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

function Container20() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start justify-center p-[16px] relative w-full">
          <Container18 />
          <Container19 />
          <Button6 />
        </div>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[14px] self-stretch shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip relative size-full">
        <Container16 />
        <Container20 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#99a1af] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Container9 />
      <Container15 />
      <Container21 />
    </div>
  );
}

function AllProjects() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[64px] items-start px-0 py-[32px] relative shrink-0 w-[1102px]" data-name="AllProjects">
      <Container3 />
      {[...Array(2).keys()].map((_, i) => (
        <Frame72 key={i} />
      ))}
    </div>
  );
}

function Heading10() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['DM_Sans:SemiBold',_sans-serif] font-semibold leading-[28px] left-0 text-[20px] text-nowrap text-white top-0 whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Florencia Acuña
      </p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[78px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[26px] left-0 text-[#99a1af] text-[16px] top-[0.5px] w-[324px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        Diseñadora de productos digitales, apasionada por la innovación, la educación y el emprendedurismo.
      </p>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[128px] items-start left-0 top-0 w-[346.664px]" data-name="Container">
      <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgImage4} />
      </div>
      <Heading10 />
      <Paragraph7 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['DM_Sans:SemiBold',_sans-serif] font-semibold leading-[24px] left-0 text-[16px] text-nowrap text-white top-[0.5px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Enlaces Rápidos
      </p>
    </div>
  );
}

function Link() {
  return (
    <div className="absolute content-stretch flex h-[21px] items-start left-0 top-[1.5px] w-[65.563px]" data-name="Link">
      <p className="font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[24px] relative shrink-0 text-[#99a1af] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 9" }}>
        Sobre mí
      </p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link />
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute content-stretch flex h-[21px] items-start left-0 top-[1.5px] w-[73.43px]" data-name="Link">
      <p className="font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[24px] relative shrink-0 text-[#99a1af] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 9" }}>
        Proyectos
      </p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link1 />
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute content-stretch flex h-[21px] items-start left-0 top-[1.5px] w-[69.539px]" data-name="Link">
      <p className="font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[24px] relative shrink-0 text-[#99a1af] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 9" }}>
        Contacto
      </p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link2 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[88px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[128px] items-start left-[378.66px] top-0 w-[346.664px]" data-name="Container">
      <Heading4 />
      <List />
    </div>
  );
}

function Heading11() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['DM_Sans:SemiBold',_sans-serif] font-semibold leading-[24px] left-0 text-[16px] text-nowrap text-white top-[0.5px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Contacto
      </p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#99a1af] text-[16px] text-nowrap top-[0.5px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 9" }}>
        contact@florenciaux.com
      </p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#99a1af] text-[16px] text-nowrap top-[0.5px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 9" }}>
        San Juan, Argentina
      </p>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[56px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph8 />
      <Paragraph9 />
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[128px] items-start left-[757.33px] top-0 w-[346.664px]" data-name="Container">
      <Heading11 />
      <Container42 />
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[128px] relative shrink-0 w-full" data-name="Container">
      <Container40 />
      <Container41 />
      <Container43 />
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[20px] relative shrink-0 w-[366.352px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[366.352px]">
        <p className="absolute font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[20px] left-0 text-[#99a1af] text-[14px] text-nowrap top-[-0.5px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 9" }}>
          © 2025 Florencia Acuña. Todos los derechos reservados.
        </p>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-[73.91px] size-[16px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p13f2e300} id="Vector" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[20px] relative shrink-0 w-[194.969px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[194.969px]">
        <p className="absolute font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[20px] left-0 text-[#99a1af] text-[14px] text-nowrap top-[-0.5px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 9" }}>
          Hecho con
        </p>
        <Icon6 />
        <p className="absolute font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[20px] left-[93.91px] text-[#99a1af] text-[14px] text-nowrap top-[-0.5px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 9" }}>
          y mucho tecito.
        </p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="box-border content-stretch flex h-[53px] items-center justify-between pb-0 pt-px px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#1e2939] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Paragraph10 />
      <Paragraph11 />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#101828] h-[300px] relative shrink-0 w-full" data-name="Footer">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[48px] h-[300px] items-start px-[171px] py-[24px] relative w-full">
          <Container44 />
          <Container45 />
        </div>
      </div>
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex flex-col gap-[100px] items-center relative shrink-0 w-[1440px]">
      <Header />
      <AllProjects />
      <Footer />
    </div>
  );
}

export default function FlorenciaAcunaProductDesignerProyectos() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] items-center relative size-full" data-name="Florencia Acuña | Product Designer | Proyectos">
      <Frame68 />
    </div>
  );
}