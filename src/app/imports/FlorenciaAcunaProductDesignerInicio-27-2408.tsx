import svgPaths from "./svg-k1li7a5a95";
import imgImage from "figma:asset/e3675e1460c029785a0b539151e61f5bdd0ef467.png";
import imgMyProject from "figma:asset/823c5b31891be9a71126acd119cd38e45ab6f017.png";
import imgImageWithFallback from "figma:asset/8742f9788708f83d6bce8496683dacf97e5abf30.png";
import img1005Cazadoresdeorog102 from "figma:asset/e413d17e385338800e6adbb995a23b583d9d76a9.png";
import img272022Mg2698 from "figma:asset/e4361415f2afaebac742b1dcb5a3503428927625.png";
import imgImg4648 from "figma:asset/ff4b97b95b197cfda8fd64cc70f8fb7b69aa700c.png";
import imgImg20201002151422 from "figma:asset/cc4430e12ef0a949da84ca883b883b1b693daba5.png";
import imgImg1941 from "figma:asset/34b0f97347fbe56beb54a345b06d07de19f48fa4.png";
import imgImg4545 from "figma:asset/e9bd0f901bb4795bc3ce736943475946598fa129.png";
import imgDsc9404 from "figma:asset/fbdf5336bcd0b4a51198239f01152158008d45b8.png";
import img20180220113141 from "figma:asset/17c70fcb2594a64d21b747998336d4a307438627.png";
import imgImg6551 from "figma:asset/f95a2c2fc62c6f54bc7132fbd1f487e884a527a2.png";
import imgImg5297 from "figma:asset/cbe08a395713a0bac13def6524bb22a7729bb0f7.png";
import imgImg6699 from "figma:asset/cf27694f1fbed7498ed75b70f80f11014c9e8c3b.png";
import imgImg8281 from "figma:asset/f76a941ee8b8b24b0a2862cfe324607550688aaf.png";
import img20170806213056 from "figma:asset/8629f03efe7ecb985d950bba1bc56342441f8dd3.png";
import imgImage1 from "figma:asset/ef4a39d7a268607b60410299d7ef2ca5d805a2dd.png";
import imgImage2 from "figma:asset/59a67fcb160cbf6ead0a7b55998b86036c90ed06.png";
import imgImage3 from "figma:asset/7a40c55a106529deeb405fed6fc97e215edaf94d.png";
import imgImage4 from "figma:asset/e0abbf28a17ec15d989f8edc23d3b97f48f24481.png";

function Container() {
  return (
    <div className="relative shrink-0 cursor-pointer" data-name="Container" onClick={() => window.location.href = '/'}>
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
        <button 
          onClick={() => window.location.href = '/'}
          className="absolute font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#4a5565] text-[16px] text-nowrap top-[0.5px] whitespace-pre cursor-pointer hover:text-gray-900 transition-colors" 
          style={{ fontVariationSettings: "'opsz' 9" }}
        >
          Inicio
        </button>
      </div>
    </div>
  );
}

function Button1() {
  const scrollToSobreMi = () => {
    const element = document.getElementById('sobre-mi');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="h-[24px] relative shrink-0 w-[65.563px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[65.563px]">
        <button 
          onClick={scrollToSobreMi}
          className="absolute font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#4a5565] text-[16px] text-nowrap top-[0.5px] whitespace-pre cursor-pointer hover:text-gray-900 transition-colors" 
          style={{ fontVariationSettings: "'opsz' 9" }}
        >
          Sobre mí
        </button>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[73.43px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[73.43px]">
        <button 
          onClick={() => window.location.href = '/proyectos'}
          className="absolute font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#4a5565] text-[16px] text-nowrap top-[0.5px] whitespace-pre cursor-pointer hover:text-gray-900 transition-colors" 
          style={{ fontVariationSettings: "'opsz' 9" }}
        >
          Proyectos
        </button>
      </div>
    </div>
  );
}

function Button3() {
  const scrollToContacto = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-black h-[36px] relative rounded-[8px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[16px] py-[8px] relative">
        <button 
          onClick={scrollToContacto}
          className="font-['DM_Sans:Medium',_sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre cursor-pointer" 
          style={{ fontVariationSettings: "'opsz' 14" }}
        >
          Contacto
        </button>
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

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <p className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[75px] relative shrink-0 text-[#101828] text-[60px] w-[472px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Hola, soy Florencia Acuña
      </p>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[28px] relative shrink-0 text-[#4a5565] text-[20px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 9" }}>
        UX/UI Designer
      </p>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[194px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Container2 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-0 py-px relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['DM_Sans:9pt_Regular',_sans-serif] font-normal grow leading-[26px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[16px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        Diseñadora de productos digitales, apasionada por la innovación, la educación y el emprendedurismo.
      </p>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[528px]" data-name="Container">
      <div className="relative rounded-[135px] shrink-0 size-[100px]" data-name="My project">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[135px] size-full" src={imgMyProject} />
      </div>
      <Container3 />
      <Paragraph />
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="[grid-area:1_/_1] h-[274.701px] ml-0 mt-0 relative rounded-[16px] w-[265.347px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[16px] size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container5() {
  return <div className="[grid-area:1_/_1] bg-[#467eff] h-[59.181px] ml-[421px] mt-[28.604px] opacity-20 rounded-[1.06861e+07px] w-[60px]" data-name="Container" />;
}

function Container6() {
  return <div className="[grid-area:1_/_1] bg-[#5433f6] h-[49.318px] ml-[26px] mt-[315.61px] opacity-20 rounded-[1.06861e+07px] w-[50px]" data-name="Container" />;
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] h-full inline-grid leading-[0] place-items-start relative shrink-0">
      <ImageWithFallback />
      <div className="[grid-area:1_/_1] h-[281.001px] ml-[287px] mt-[115px] relative rounded-[16px] w-[265.347px]" data-name="1005cazadoresdeorog1-02">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[16px] size-full" src={img1005Cazadoresdeorog102} />
      </div>
      <Container5 />
      <Container6 />
    </div>
  );
}

function HeroSection() {
  return (
    <div id="inicio" className="bg-white content-stretch flex gap-[20px] items-center relative shrink-0 w-[1104px]" data-name="HeroSection">
      <Container4 />
      <div className="flex flex-row items-center self-stretch">
        <Group1 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[520px]" data-name="Heading 2">
      <p className="absolute font-['DM_Sans:Bold',_sans-serif] font-bold leading-[40px] left-0 text-[#101828] text-[36px] text-nowrap top-[0.5px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Sobre mí
      </p>
    </div>
  );
}

function Container7() {
  return <div className="absolute bg-black h-[4px] left-0 rounded-[1.67772e+07px] top-[56px] w-[80px]" data-name="Container" />;
}

function Container8() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <Container7 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['DM_Sans:9pt_Regular',_sans-serif] font-normal grow leading-[26px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[16px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        Soy UX/UI Designer apasionada por crear experiencias digitales que impacten positivamente en la vida de las personas. Tengo experiencia en diseño de interfaces, investigación de usuarios y prototipado, y disfruto transformar necesidades complejas en soluciones claras, intuitivas y elegantes.
      </p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['DM_Sans:9pt_Regular',_sans-serif] font-normal grow leading-[26px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[16px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <span>{`Me caracteriza una `}</span>
        <span className="font-['DM_Sans:Bold',_sans-serif] font-bold" style={{ fontVariationSettings: "'opsz' 14" }}>{`mentalidad de aprendizaje continuo: `}</span>
        <span>{`siempre estoy explorando nuevas herramientas, tendencias y metodologías que me ayuden a crecer como profesional. También participo activamente en comunidades y programas de mentoría como `}</span>
        <span className="font-['DM_Sans:Bold',_sans-serif] font-bold" style={{ fontVariationSettings: "'opsz' 14" }}>
          +Mujeres en UX LATAM
        </span>
        <span>{` y `}</span>
        <span className="font-['DM_Sans:Bold',_sans-serif] font-bold" style={{ fontVariationSettings: "'opsz' 14" }}>
          Create.latam
        </span>
        , donde comparto conocimiento y colaboro en proyectos con impacto social.
      </p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['DM_Sans:9pt_Regular',_sans-serif] font-normal grow leading-[26px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[16px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        Creo en el diseño como un puente entre la empatía, la innovación y la colaboración interdisciplinaria. Para mí, el mejor diseño es aquel que se siente natural, accesible y cumple su propósito sin esfuerzo para el usuario.
      </p>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph1 />
      <Paragraph2 />
      <Paragraph3 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['DM_Sans:SemiBold',_sans-serif] font-semibold leading-[24px] left-0 text-[#101828] text-[16px] text-nowrap top-[0.5px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Metodologias
      </p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <ul className="[white-space-collapse:collapse] absolute block css-oa0odi font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[0] left-0 text-[#4a5565] text-[16px] text-nowrap top-[0.5px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <li className="ms-[24px]">
          <span className="leading-[24px]">UX Research</span>
        </li>
      </ul>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <ul className="[white-space-collapse:collapse] absolute block css-oa0odi font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[0] left-0 text-[#4a5565] text-[16px] text-nowrap top-[0.5px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <li className="ms-[24px]">
          <span className="leading-[24px]">Product Discovery</span>
        </li>
      </ul>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <ul className="[white-space-collapse:collapse] absolute block css-oa0odi font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[0] left-0 text-[#4a5565] text-[16px] text-nowrap top-[0.5px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <li className="ms-[24px]">
          <span className="leading-[24px]">Design Thinking</span>
        </li>
      </ul>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <ul className="[white-space-collapse:collapse] absolute block css-oa0odi font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[0] left-0 text-[#4a5565] text-[16px] text-nowrap top-[0.5px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <li className="ms-[24px]">
          <span className="leading-[24px]">Lean Inception</span>
        </li>
      </ul>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <ul className="[white-space-collapse:collapse] absolute block css-oa0odi font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[0] left-0 text-[#4a5565] text-[16px] text-nowrap top-[0.5px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <li className="ms-[24px]">
          <span className="leading-[24px]">{`Scrum & Kanban`}</span>
        </li>
      </ul>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
      <ListItem3 />
      <ListItem4 />
    </div>
  );
}

function Container10() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <Heading3 />
      <List />
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['DM_Sans:SemiBold',_sans-serif] font-semibold leading-[24px] left-0 text-[#101828] text-[16px] text-nowrap top-[0.5px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Herramientas
      </p>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <ul className="[white-space-collapse:collapse] absolute block css-oa0odi font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[0] left-0 text-[#4a5565] text-[16px] text-nowrap top-[0.5px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <li className="ms-[24px]">
          <span className="leading-[24px]">Figma</span>
        </li>
      </ul>
    </div>
  );
}

function ListItem6() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <ul className="[white-space-collapse:collapse] absolute block css-oa0odi font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[0] left-0 text-[#4a5565] text-[16px] text-nowrap top-[0.5px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <li className="ms-[24px]">
          <span className="leading-[24px]">Jira, Confluence, Trello</span>
        </li>
      </ul>
    </div>
  );
}

function ListItem7() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <ul className="[white-space-collapse:collapse] absolute block css-oa0odi font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[0] left-0 text-[#4a5565] text-[16px] text-nowrap top-[0.5px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <li className="ms-[24px]">
          <span className="leading-[24px]">Maze, Clarity, Amplitude</span>
        </li>
      </ul>
    </div>
  );
}

function ListItem8() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <ul className="[white-space-collapse:collapse] absolute block css-oa0odi font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[0] left-0 text-[#4a5565] text-[16px] text-nowrap top-[0.5px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <li className="ms-[24px]">
          <span className="leading-[24px]">Whimsical</span>
        </li>
      </ul>
    </div>
  );
}

function ListItem9() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <ul className="[white-space-collapse:collapse] absolute block css-oa0odi font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[0] left-0 text-[#4a5565] text-[16px] text-nowrap top-[0.5px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <li className="ms-[24px]">
          <span className="leading-[24px]">Notion</span>
        </li>
      </ul>
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem5 />
      <ListItem6 />
      <ListItem7 />
      <ListItem8 />
      <ListItem9 />
    </div>
  );
}

function Container11() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <Heading5 />
      <List1 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
      <Container10 />
      <Container11 />
    </div>
  );
}

function Container13() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <Container8 />
      <Container9 />
      <Container12 />
    </div>
  );
}

function ImageWithFallback1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px overflow-clip relative shrink-0 w-full" data-name="ImageWithFallback">
      <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[520px]" data-name="27-2022-_MG_2698">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img272022Mg2698} />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0)] box-border content-stretch flex flex-col grow items-start min-h-px min-w-px overflow-clip relative rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container">
      <ImageWithFallback1 />
    </div>
  );
}

function ImageWithFallback2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-full" data-name="ImageWithFallback">
      <div className="aspect-[3024/4032] basis-0 grow min-h-px min-w-px relative shrink-0" data-name="IMG_4648">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImg4648} />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-[rgba(255,255,255,0)] box-border content-stretch flex flex-col h-full items-start overflow-clip relative rounded-[14px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 w-[252px]" data-name="Container">
      <ImageWithFallback2 />
    </div>
  );
}

function ImageWithFallback3() {
  return (
    <div className="content-stretch flex gap-[10px] h-[336px] items-center overflow-clip relative shrink-0 w-full" data-name="ImageWithFallback">
      <div className="h-[336px] relative shrink-0 w-[252px]" data-name="IMG_20201002_151422">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImg20201002151422} />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-[rgba(255,255,255,0)] box-border content-stretch flex flex-col h-full items-start overflow-clip relative rounded-[14px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 w-[252px]" data-name="Container">
      <ImageWithFallback3 />
    </div>
  );
}

function Container17() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <Container15 />
      <Container16 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[672px] items-start relative shrink-0 w-[520px]" data-name="Container">
      <Container14 />
      <Container17 />
    </div>
  );
}

function ImageWithFallback4() {
  return (
    <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-full" data-name="ImageWithFallback">
      <div className="h-[336px] relative shrink-0 w-[252px]" data-name="IMG_1941">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImg1941} />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-[rgba(255,255,255,0)] box-border content-stretch flex flex-col h-full items-start overflow-clip relative rounded-[14px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 w-[252px]" data-name="Container">
      <ImageWithFallback4 />
    </div>
  );
}

function ImageWithFallback5() {
  return (
    <div className="content-stretch flex gap-[10px] h-[336px] items-center overflow-clip relative shrink-0 w-full" data-name="ImageWithFallback">
      <div className="aspect-[3024/4032] basis-0 grow min-h-px min-w-px relative shrink-0" data-name="IMG_4545">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImg4545} />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-[rgba(255,255,255,0)] box-border content-stretch flex flex-col h-full items-start overflow-clip relative rounded-[14px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 w-[252px]" data-name="Container">
      <ImageWithFallback5 />
    </div>
  );
}

function Container21() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <Container19 />
      <Container20 />
    </div>
  );
}

function Container22() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0)] box-border content-stretch flex flex-col grow items-start min-h-px min-w-px overflow-clip relative rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container">
      <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="DSC_9404">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgDsc9404} />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[672px] items-start relative shrink-0 w-[520px]" data-name="Container">
      <Container21 />
      <Container22 />
    </div>
  );
}

function Container24() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0)] box-border content-stretch flex flex-col grow items-start min-h-px min-w-px overflow-clip relative rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container">
      <div className="h-[328px] relative shrink-0 w-[584px]" data-name="20180220_113141">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img20180220113141} />
      </div>
    </div>
  );
}

function ImageWithFallback6() {
  return (
    <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-full" data-name="ImageWithFallback">
      <div className="aspect-[3072/4096] basis-0 grow min-h-px min-w-px relative shrink-0" data-name="IMG_6551">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImg6551} />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="bg-[rgba(255,255,255,0)] box-border content-stretch flex flex-col h-full items-start overflow-clip relative rounded-[14px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 w-[252px]" data-name="Container">
      <ImageWithFallback6 />
    </div>
  );
}

function ImageWithFallback7() {
  return (
    <div className="content-stretch flex gap-[10px] h-[336px] items-center overflow-clip relative shrink-0 w-full" data-name="ImageWithFallback">
      <div className="aspect-[3024/4032] basis-0 grow min-h-px min-w-px relative shrink-0" data-name="IMG_5297">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImg5297} />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="bg-[rgba(255,255,255,0)] box-border content-stretch flex flex-col h-full items-start overflow-clip relative rounded-[14px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 w-[252px]" data-name="Container">
      <ImageWithFallback7 />
    </div>
  );
}

function Container27() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <Container25 />
      <Container26 />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[672px] items-start relative shrink-0 w-[520px]" data-name="Container">
      <Container24 />
      <Container27 />
    </div>
  );
}

function ImageWithFallback8() {
  return (
    <div className="content-stretch flex gap-[10px] h-[328px] items-center overflow-clip relative shrink-0 w-full" data-name="ImageWithFallback">
      <div className="aspect-[3072/4096] basis-0 grow min-h-px min-w-px relative shrink-0" data-name="IMG_6699">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImg6699} />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="bg-[rgba(255,255,255,0)] box-border content-stretch flex flex-col h-full items-start overflow-clip relative rounded-[14px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 w-[252px]" data-name="Container">
      <ImageWithFallback8 />
    </div>
  );
}

function ImageWithFallback9() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow items-center min-h-px min-w-px overflow-clip relative shrink-0 w-full" data-name="ImageWithFallback">
      <div className="aspect-[3024/4032] basis-0 grow min-h-px min-w-px relative shrink-0" data-name="IMG_8281">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImg8281} />
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="bg-[rgba(255,255,255,0)] box-border content-stretch flex flex-col h-full items-start overflow-clip relative rounded-[14px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 w-[252px]" data-name="Container">
      <ImageWithFallback9 />
    </div>
  );
}

function Container31() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <Container29 />
      <Container30 />
    </div>
  );
}

function Container32() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0)] box-border content-stretch flex flex-col grow items-start min-h-px min-w-px overflow-clip relative rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container">
      <div className="h-[328px] relative shrink-0 w-[584px]" data-name="20170806_213056">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img20170806213056} />
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[672px] items-start relative shrink-0 w-[520px]" data-name="Container">
      <Container31 />
      <Container32 />
    </div>
  );
}

function Frame69() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow items-center min-h-px min-w-px relative self-stretch shrink-0">
      <Container18 />
      <Container23 />
      <Container28 />
      <Container33 />
    </div>
  );
}

function AboutSection() {
  return (
    <div id="sobre-mi" className="bg-white content-stretch flex gap-[32px] items-start overflow-clip relative shrink-0 w-[1104px]" data-name="AboutSection">
      <Container13 />
      <Frame69 />
    </div>
  );
}

function Frame70() {
  return <div className="absolute bg-gray-50 h-[1888px] left-0 top-0 w-[1440px]" />;
}

function Heading6() {
  return (
    <div className="h-[40px] relative shrink-0 w-[1104px]" data-name="Heading 2">
      <p className="absolute font-['DM_Sans:Bold',_sans-serif] font-bold leading-[40px] left-[552.45px] text-[#101828] text-[36px] text-center text-nowrap top-[0.5px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Proyectos Destacados
      </p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[56px] relative shrink-0 w-[768px]" data-name="Paragraph">
      <p className="absolute font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[28px] left-[384.31px] text-[#4a5565] text-[20px] text-center top-0 translate-x-[-50%] w-[759px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        Estos son los tres proyectos donde más he aprendido y que mejor representan mi evolución como UX/UI Designer.
      </p>
    </div>
  );
}

function Container34() {
  return <div className="bg-black h-[4px] rounded-[1.67772e+07px] shrink-0 w-[80px]" data-name="Container" />;
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading6 />
      <Paragraph4 />
      <Container34 />
    </div>
  );
}

function Container36() {
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

function Container37() {
  return (
    <div className="bg-[rgba(243,244,246,0.9)] relative rounded-[1.67772e+07px] shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start justify-center px-[12px] py-[8px] relative">
        <Text />
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex gap-[24px] h-[32px] items-center relative shrink-0 w-full" data-name="Heading 3">
      <a className="[white-space-collapse:collapse] block font-['DM_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#101828] text-[24px] text-nowrap" href="https://cintelink.com/views/login/" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="[text-underline-position:from-font] cursor-pointer decoration-solid leading-[32px] underline whitespace-pre">Cintelink</p>
      </a>
      <Container37 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['DM_Sans:9pt_Regular',_sans-serif] font-normal grow leading-[26px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[16px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <span className="font-['DM_Sans:Bold',_sans-serif] font-bold" style={{ fontVariationSettings: "'opsz' 14" }}>{`Desafío: `}</span>
        <span style={{ fontVariationSettings: "'opsz' 9" }}>la plataforma necesitaba evolucionar para ofrecer mayor trazabilidad y seguridad en las operaciones de carga de combustible.</span>
      </p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['DM_Sans:9pt_Regular',_sans-serif] font-normal grow leading-[26px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[16px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <span className="font-['DM_Sans:Bold',_sans-serif] font-bold" style={{ fontVariationSettings: "'opsz' 14" }}>{`Lo que hicimos: `}</span>Lideré el rediseño de la experiencia, validando nuevas funciones con usuarios y creando un Design System para mantener coherencia. También trabajé en el equipo de Smart Contracts, integrando blockchain para dar más seguridad.
      </p>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading7 />
      <Paragraph5 />
      <Paragraph6 />
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

function Container39() {
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
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center px-[11px] py-[8px] relative rounded-[8px] shrink-0 opacity-50 cursor-not-allowed" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Icon />
      <p className="font-['DM_Sans:Medium',_sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Ver en FIgma [WIP]
      </p>
    </div>
  );
}

function Container40() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="flex flex-col justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-start justify-center p-[32px] relative size-full">
          <Container38 />
          <Container39 />
          <Button4 />
        </div>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex gap-[24px] items-center overflow-clip relative w-full">
        <Container36 />
        <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
          <Container40 />
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

function Container42() {
  return (
    <div className="bg-[rgba(243,244,246,0.9)] relative rounded-[1.67772e+07px] shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start justify-center px-[12px] py-[8px] relative">
        <Text1 />
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex gap-[24px] h-[32px] items-center relative shrink-0 w-full" data-name="Heading 3">
      <a className="[white-space-collapse:collapse] block font-['DM_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#101828] text-[24px] text-nowrap" href="https://cloudlabslearning.com/" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="[text-underline-position:from-font] cursor-pointer decoration-solid leading-[32px] underline whitespace-pre">CloudLabs</p>
      </a>
      <Container42 />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['DM_Sans:9pt_Regular',_sans-serif] font-normal grow leading-[26px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[16px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <span className="font-['DM_Sans:Bold',_sans-serif] font-bold" style={{ fontVariationSettings: "'opsz' 14" }}>{`Desafío: `}</span>
        <span style={{ fontVariationSettings: "'opsz' 9" }}>rediseñar la plataforma para unificar la experiencia de estudiantes, docentes e instituciones en un solo sistema, con una arquitectura más clara y escalable.</span>
      </p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['DM_Sans:9pt_Regular',_sans-serif] font-normal grow leading-[26px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[16px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <span className="font-['DM_Sans:Bold',_sans-serif] font-bold" style={{ fontVariationSettings: "'opsz' 14" }}>{`Lo que hicimos: `}</span>
        <span style={{ fontVariationSettings: "'opsz' 9" }}>{`hicimos un rediseño de la arquitectura, unificando la experiencia de los usuarios y sus sistemas para que tanto estudiantes, profesores e instituciones puedan enseñar y aprender a través de laboratorios gamificados en áreas STEM. `}</span>
      </p>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading8 />
      <Paragraph7 />
      <Paragraph8 />
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

function Container44() {
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

function Button5() {
  return (
    <div className="bg-white h-[32px] relative rounded-[8px] shrink-0 w-[148.805px] cursor-pointer hover:bg-gray-50 transition-colors" data-name="Button" onClick={() => window.open('https://behance.net/gallery/cloudlabs', '_blank')}>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Icon1 />
      <p className="absolute font-['DM_Sans:Medium',_sans-serif] font-medium leading-[20px] left-[35px] text-[14px] text-neutral-950 text-nowrap top-[5.5px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Ver en Behance
      </p>
    </div>
  );
}

function Container45() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="flex flex-col justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-start justify-center p-[32px] relative size-full">
          <Container43 />
          <Container44 />
          <Button5 />
        </div>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-end justify-end overflow-clip relative rounded-br-[16px] rounded-tr-[16px] shrink-0 size-[500px]" data-name="Container">
      <div className="h-[583px] relative shrink-0 w-[500px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex gap-[24px] items-center overflow-clip relative w-full">
        <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
          <Container45 />
        </div>
        <Container46 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#99a1af] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container48() {
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

function Container49() {
  return (
    <div className="bg-[rgba(243,244,246,0.9)] relative rounded-[1.67772e+07px] shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start justify-center px-[12px] py-[8px] relative">
        <Text2 />
      </div>
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex gap-[24px] h-[32px] items-center relative shrink-0 w-full" data-name="Heading 3">
      <p className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[32px] relative shrink-0 text-[#101828] text-[24px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Respública
      </p>
      <Container49 />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['DM_Sans:9pt_Regular',_sans-serif] font-normal grow leading-[26px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[16px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <span className="font-['DM_Sans:Bold',_sans-serif] font-bold" style={{ fontVariationSettings: "'opsz' 14" }}>{`Desafío: `}</span>diseñar una aplicación móvil que permita a los ciudadanos crear espacios de debate digital y que los grupos puedan medir y monitorear la participación.
      </p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['DM_Sans:9pt_Regular',_sans-serif] font-normal grow leading-[26px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[16px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <span className="font-['DM_Sans:Bold',_sans-serif] font-bold" style={{ fontVariationSettings: "'opsz' 14" }}>{`Lo que hicimos: `}</span>definimos flujos de creación de debates y participación; diseñamos interfaces móviles claras, estados vacíos, validaciones y microinteracciones; prototipamos y validamos con usuarios.
      </p>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading9 />
      <Paragraph9 />
      <Paragraph10 />
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

function Container51() {
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

function Button6() {
  return (
    <div className="bg-white h-[32px] relative rounded-[8px] shrink-0 w-[148.805px] cursor-pointer hover:bg-gray-50 transition-colors" data-name="Button" onClick={() => window.open('https://behance.net/gallery/republica', '_blank')}>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Icon2 />
      <p className="absolute font-['DM_Sans:Medium',_sans-serif] font-medium leading-[20px] left-[35px] text-[14px] text-neutral-950 text-nowrap top-[5.5px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Ver en Behance
      </p>
    </div>
  );
}

function Container52() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="flex flex-col justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-start justify-center p-[32px] relative size-full">
          <Container50 />
          <Container51 />
          <Button6 />
        </div>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex gap-[24px] items-center overflow-clip relative w-full">
        <Container48 />
        <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
          <Container52 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#99a1af] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function VerTodosProyectosButton() {
  return (
    <div className="flex justify-center w-full">
      <div className="bg-black h-[36px] relative rounded-[8px] shrink-0" data-name="Button">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[16px] py-[8px] relative">
          <button 
            onClick={() => window.location.href = '/proyectos'}
            className="font-['DM_Sans:Medium',_sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre cursor-pointer" 
            style={{ fontVariationSettings: "'opsz' 14" }}
          >
            Ver todos los proyectos
          </button>
        </div>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col gap-[60px] items-start relative shrink-0 w-full" data-name="Container">
      <Container41 />
      <Container47 />
      <Container53 />
      <VerTodosProyectosButton />
    </div>
  );
}

function FeaturedProjects() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[64px] items-start left-[168px] px-0 py-[32px] top-0 w-[1104px]" data-name="FeaturedProjects">
      <Container35 />
      <Container54 />
    </div>
  );
}

function Frame71() {
  return (
    <div className="h-[1888px] relative shrink-0 w-[1440px]">
      <Frame70 />
      <FeaturedProjects />
    </div>
  );
}

function Heading10() {
  return (
    <div className="h-[40px] relative shrink-0 w-[1104px]" data-name="Heading 2">
      <p className="absolute font-['DM_Sans:Bold',_sans-serif] font-bold leading-[40px] left-[551.73px] text-[#101828] text-[36px] text-center text-nowrap top-[0.5px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Contacto
      </p>
    </div>
  );
}

function Container55() {
  return <div className="bg-black h-[4px] rounded-[1.67772e+07px] shrink-0 w-[80px]" data-name="Container" />;
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading10 />
      <Container55 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p9c60400} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2bf8f980} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container57() {
  return (
    <div className="bg-gray-100 relative rounded-[1.67772e+07px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[48px]">
        <Icon3 />
      </div>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['DM_Sans:Medium',_sans-serif] font-medium leading-[24px] left-0 text-[#101828] text-[16px] text-nowrap top-[0.5px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Correo electrónico
      </p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#4a5565] text-[16px] text-nowrap top-[0.5px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 9" }}>
        contact@florenciaux.com
      </p>
    </div>
  );
}

function Container58() {
  return (
    <div className="h-[48px] relative shrink-0 w-[191.219px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[48px] items-start relative w-[191.219px]">
        <Paragraph11 />
        <Paragraph12 />
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex gap-[16px] h-[48px] items-center relative shrink-0 w-full" data-name="Container">
      <Container57 />
      <Container58 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p30958080} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M6 9H2V21H6V9Z" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p1bb3a100} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container60() {
  return (
    <div className="bg-gray-100 relative rounded-[1.67772e+07px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[48px]">
        <Icon4 />
      </div>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['DM_Sans:Medium',_sans-serif] font-medium leading-[24px] left-0 text-[#101828] text-[16px] text-nowrap top-[0.5px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        LinkedIn
      </p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <a className="[white-space-collapse:collapse] absolute block font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[0] left-0 text-[#4a5565] text-[16px] text-nowrap top-[0.5px]" href="https://www.linkedin.com/in/florencia-acuna-ux/" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="[text-underline-position:from-font] cursor-pointer decoration-solid leading-[24px] underline whitespace-pre">https://www.linkedin.com/in/florencia-acuna-ux/</p>
      </a>
    </div>
  );
}

function Container61() {
  return (
    <div className="h-[48px] relative shrink-0 w-[360.07px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[48px] items-start relative w-[360.07px]">
        <Paragraph13 />
        <Paragraph14 />
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex gap-[16px] h-[48px] items-center relative shrink-0 w-full" data-name="Container">
      <Container60 />
      <Container61 />
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative self-stretch shrink-0" data-name="Container">
      <Container59 />
      <Container62 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M12 15V3" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2d557600} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M7 10L12 15L17 10" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container64() {
  return (
    <div className="bg-black relative rounded-[1.67772e+07px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[48px]">
        <Icon5 />
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="basis-0 grow h-[68px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[68px] items-start relative w-full">
        <p className="font-['DM_Sans:SemiBold',_sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#101828] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
          Descargá mi CV
        </p>
        <p className="font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[20px] relative shrink-0 text-[#4a5565] text-[14px] w-[232px]" style={{ fontVariationSettings: "'opsz' 9" }}>
          Conocá más sobre mi experiencia y formación
        </p>
      </div>
    </div>
  );
}

function Button7() {
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv-florencia-acuna.pdf';
    link.download = 'CV-Florencia-Acuna.pdf';
    link.click();
  };

  return (
    <div className="bg-black h-[36px] relative rounded-[8px] shrink-0 w-[99.25px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[16px] py-[8px] relative w-[99.25px]">
        <button 
          onClick={downloadCV}
          className="font-['DM_Sans:Medium',_sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre cursor-pointer" 
          style={{ fontVariationSettings: "'opsz' 14" }}
        >
          Descargar
        </button>
      </div>
    </div>
  );
}

function ContactSection() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[478px]" data-name="ContactSection">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[16px] h-full items-center relative w-[478px]">
        <Container64 />
        <Container65 />
        <Button7 />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-gray-50 box-border content-stretch flex flex-col h-[118px] items-start p-[25px] relative rounded-[14px] shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[14px]" />
      <ContactSection />
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container63 />
      <Card />
    </div>
  );
}

function ContactSection1() {
  return (
    <div id="contacto" className="bg-white box-border content-stretch flex flex-col gap-[64px] items-start px-[24px] py-0 relative shrink-0 w-[1104px]" data-name="ContactSection">
      <Container56 />
      <Container66 />
    </div>
  );
}

function Heading11() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['DM_Sans:SemiBold',_sans-serif] font-semibold leading-[28px] left-0 text-[20px] text-nowrap text-white top-0 whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Florencia Acuña
      </p>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[78px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[26px] left-0 text-[#99a1af] text-[16px] top-[0.5px] w-[324px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        Diseñadora de productos digitales, apasionada por la innovación, la educación y el emprendedurismo.
      </p>
    </div>
  );
}

function Container67() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[128px] items-start left-0 top-0 w-[346.664px]" data-name="Container">
      <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgImage4} />
      </div>
      <Heading11 />
      <Paragraph15 />
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
  const scrollToSobreMi = () => {
    const element = document.getElementById('sobre-mi');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="absolute content-stretch flex h-[21px] items-start left-0 top-[1.5px] w-[65.563px]" data-name="Link">
      <button 
        onClick={scrollToSobreMi}
        className="font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[24px] relative shrink-0 text-[#99a1af] text-[16px] text-nowrap whitespace-pre cursor-pointer hover:text-white transition-colors" 
        style={{ fontVariationSettings: "'opsz' 9" }}
      >
        Sobre mí
      </button>
    </div>
  );
}

function ListItem10() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link />
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute content-stretch flex h-[21px] items-start left-0 top-[1.5px] w-[73.43px]" data-name="Link">
      <button 
        onClick={() => window.location.href = '/proyectos'}
        className="font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[24px] relative shrink-0 text-[#99a1af] text-[16px] text-nowrap whitespace-pre cursor-pointer hover:text-white transition-colors" 
        style={{ fontVariationSettings: "'opsz' 9" }}
      >
        Proyectos
      </button>
    </div>
  );
}

function ListItem11() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link1 />
    </div>
  );
}

function Link2() {
  const scrollToContacto = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="absolute content-stretch flex h-[21px] items-start left-0 top-[1.5px] w-[69.539px]" data-name="Link">
      <button 
        onClick={scrollToContacto}
        className="font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[24px] relative shrink-0 text-[#99a1af] text-[16px] text-nowrap whitespace-pre cursor-pointer hover:text-white transition-colors" 
        style={{ fontVariationSettings: "'opsz' 9" }}
      >
        Contacto
      </button>
    </div>
  );
}

function ListItem12() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link2 />
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[88px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem10 />
      <ListItem11 />
      <ListItem12 />
    </div>
  );
}

function Container68() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[128px] items-start left-[378.66px] top-0 w-[346.664px]" data-name="Container">
      <Heading4 />
      <List2 />
    </div>
  );
}

function Heading12() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['DM_Sans:SemiBold',_sans-serif] font-semibold leading-[24px] left-0 text-[16px] text-nowrap text-white top-[0.5px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Contacto
      </p>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#99a1af] text-[16px] text-nowrap top-[0.5px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 9" }}>
        contact@florenciaux.com
      </p>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#99a1af] text-[16px] text-nowrap top-[0.5px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 9" }}>
        San Juan, Argentina
      </p>
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[56px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph16 />
      <Paragraph17 />
    </div>
  );
}

function Container70() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[128px] items-start left-[757.33px] top-0 w-[346.664px]" data-name="Container">
      <Heading12 />
      <Container69 />
    </div>
  );
}

function Container71() {
  return (
    <div className="h-[128px] relative shrink-0 w-full" data-name="Container">
      <Container67 />
      <Container68 />
      <Container70 />
    </div>
  );
}

function Paragraph18() {
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

function Paragraph19() {
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

function Container72() {
  return (
    <div className="box-border content-stretch flex h-[53px] items-center justify-between pb-0 pt-px px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#1e2939] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Paragraph18 />
      <Paragraph19 />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#101828] h-[300px] relative shrink-0 w-full" data-name="Footer">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[48px] h-[300px] items-start px-[171px] py-[24px] relative w-full">
          <Container71 />
          <Container72 />
        </div>
      </div>
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex flex-col gap-[100px] items-center relative shrink-0 w-[1440px]">
      <Header />
      <HeroSection />
      <AboutSection />
      <Frame71 />
      <ContactSection1 />
      <Footer />
    </div>
  );
}

export default function FlorenciaAcunaProductDesignerInicio() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] items-center relative size-full" data-name="Florencia Acuña | Product Designer | Inicio">
      <Frame68 />
    </div>
  );
}