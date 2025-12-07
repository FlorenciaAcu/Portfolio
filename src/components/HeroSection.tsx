import imgMyProject from "figma:asset/823c5b31891be9a71126acd119cd38e45ab6f017.png";
import imgImageWithFallback from "figma:asset/8742f9788708f83d6bce8496683dacf97e5abf30.png";
import img1005Cazadoresdeorog102 from "figma:asset/e413d17e385338800e6adbb995a23b583d9d76a9.png";

function Heading1() {
  return (
    <div className="flex flex-col items-start w-full" data-name="Heading 1">
      <h1 className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-tight text-[#101828] text-4xl lg:text-5xl xl:text-6xl w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Hola, soy<br />Florencia Acuña
      </h1>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="flex flex-col gap-4 items-start w-full" data-name="Container">
      <p className="font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-relaxed text-[#4a5565] text-xl lg:text-2xl" style={{ fontVariationSettings: "'opsz' 9" }}>
        UX/UI Designer
      </p>
      <p className="font-['DM_Sans:9pt_Regular',_sans-serif] font-normal leading-relaxed text-[#4a5565] text-lg" style={{ fontVariationSettings: "'opsz' 9" }}>
        Diseñadora de productos digitales, apasionada por la innovación, la educación y el emprendedurismo.
      </p>
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

function Container2() {
  return (
    <div className="flex flex-col gap-8 items-start w-full" data-name="Container">
      <div className="relative rounded-full w-20 h-20 lg:w-24 lg:h-24" data-name="My project">
        <img alt="Florencia Acuña" className="absolute inset-0 object-cover rounded-full w-full h-full" src={imgMyProject} />
      </div>
      <div className="flex flex-col gap-6 w-full">
        <Heading1 />
        <Paragraph />
      </div>
    </div>
  );
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

export function HeroSection() {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center bg-white py-40">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]" data-name="HeroSection">
          <Container2 />
          <div className="flex justify-center items-center">
            <Group1 />
          </div>
        </div>
      </div>
    </section>
  );
}