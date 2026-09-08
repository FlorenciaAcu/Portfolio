import { useEffect } from "react";

// All figma:asset images that need to be preloaded globally
import img1  from "figma:asset/e4361415f2afaebac742b1dcb5a3503428927625.png";
import img2  from "figma:asset/ff4b97b95b197cfda8fd64cc70f8fb7b69aa700c.png";
import img3  from "figma:asset/cc4430e12ef0a949da84ca883b883b1b693daba5.png";
import img4  from "figma:asset/34b0f97347fbe56beb54a345b06d07de19f48fa4.png";
import img5  from "figma:asset/e9bd0f901bb4795bc3ce736943475946598fa129.png";
import img6  from "figma:asset/fbdf5336bcd0b4a51198239f01152158008d45b8.png";
import img7  from "figma:asset/17c70fcb2594a64d21b747998336d4a307438627.png";
import img8  from "figma:asset/f95a2c2fc62c6f54bc7132fbd1f487e884a527a2.png";
import img9  from "figma:asset/cbe08a395713a0bac13def6524bb22a7729bb0f7.png";
import img10 from "figma:asset/cf27694f1fbed7498ed75b70f80f11014c9e8c3b.png";
import img11 from "figma:asset/f76a941ee8b8b24b0a2862cfe324607550688aaf.png";
import img12 from "figma:asset/8629f03efe7ecb985d950bba1bc56342441f8dd3.png";
import profilePhoto from "../../imports/Florencia_Acu_a.jpg";

const ALL_IMAGES = [
  img1, img2, img3, img4, img5, img6,
  img7, img8, img9, img10, img11, img12,
  profilePhoto,
];

export function GlobalImagePreloader() {
  useEffect(() => {
    ALL_IMAGES.forEach((src) => {
      const img = new Image();
      img.src = src;
      // decode() forces the browser to fully decode the image before it's needed,
      // eliminating the flash/delay when images appear in the carousel
      img.decode().catch(() => {});
    });
  }, []);

  return null;
}
