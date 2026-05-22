import imgMyProject from "figma:asset/823c5b31891be9a71126acd119cd38e45ab6f017.png";
import imgImageWithFallback from "figma:asset/8742f9788708f83d6bce8496683dacf97e5abf30.png";
import img1005Cazadoresdeorog102 from "figma:asset/e413d17e385338800e6adbb995a23b583d9d76a9.png";

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <p className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[75px] relative shrink-0 text-[#101828] text-[60px] w-[472px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Hola, soy Florencia Acuña
      </p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-[28px] relative shrink-0 text-[#4a5565] text-[20px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 9" }}>
        UX/UI Designer
      </p>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[194px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Container />
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

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[528px]" data-name="Container">
      <div className="relative rounded-[135px] shrink-0 size-[100px]" data-name="My project">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[135px] size-full" src={imgMyProject} />
      </div>
      <Container1 />
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

function Container3() {
  return <div className="[grid-area:1_/_1] bg-[#467eff] h-[59.181px] ml-[421px] mt-[28.604px] opacity-20 rounded-[1.06861e+07px] w-[60px]" data-name="Container" />;
}

function Container4() {
  return <div className="[grid-area:1_/_1] bg-[#5433f6] h-[49.318px] ml-[26px] mt-[315.61px] opacity-20 rounded-[1.06861e+07px] w-[50px]" data-name="Container" />;
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] h-full inline-grid leading-[0] place-items-start relative shrink-0">
      <ImageWithFallback />
      <div className="[grid-area:1_/_1] h-[281.001px] ml-[287px] mt-[115px] relative rounded-[16px] w-[265.347px]" data-name="1005cazadoresdeorog1-02">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[16px] size-full" src={img1005Cazadoresdeorog102} />
      </div>
      <Container3 />
      <Container4 />
    </div>
  );
}

export default function HeroSection() {
  return (
    <div className="bg-white content-stretch flex gap-[20px] items-center relative size-full" data-name="HeroSection">
      <Container2 />
      <div className="flex flex-row items-center self-stretch">
        <Group1 />
      </div>
    </div>
  );
}