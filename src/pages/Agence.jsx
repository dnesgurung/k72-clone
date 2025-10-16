import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/all";

const Agence = () => {
  gsap.registerPlugin(ScrollTrigger);

  const imageDivRef = useRef(null);
  const imageRef = useRef(null);

  const imageArray = [

    "../src/assets/images/k72-agence-1.jpg",
    "../src/assets/images/k72-agence-2.jpg",
    "../src/assets/images/k72-agence-3.jpg",
    "../src/assets/images/k72-agence-4.jpg",
    "../src/assets/images/k72-agence-5.jpg",
    "../src/assets/images/k72-agence-6.jpg",
    "../src/assets/images/k72-agence-7.jpg",
    "../src/assets/images/k72-agence-8.jpg",
    "../src/assets/images/k72-agence-9.jpg",
    "../src/assets/images/k72-agence-10.jpg",
    "../src/assets/images/k72-agence-11.jpg",
    "../src/assets/images/k72-agence-12.jpg",
    "../src/assets/images/k72-agence-13.jpg",
    "../src/assets/images/k72-agence-14.jpg",
    "../src/assets/images/k72-agence-15.jpg",
  ];

  useGSAP(function () {
    gsap.from(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        markers: true,
        start: "top 29%",
        end: "top -100%",
        scrub: true,
        pin: true,
        onUpdate: (elem) => {
          let imageIndex;
          if (elem.progress < 1) {
            imageIndex = Math.round(elem.progress * imageArray.length);
          } else {
            imageIndex = imageArray.length - 1;
          }

          imageRef.current.src = imageArray[imageIndex];
        },
      },
    });
  });
  return (
    <div>
      <div className="section1">
        <div
          ref={imageDivRef}
          className="h-[20vw] w-[15vw] absolute top-70 left-[30vw] "
        >
          <img
            ref={imageRef}
            className="h-full w-full object-cover rounded-3xl"
            src="../src/assets/images/k72-agence-1.jpg"
            alt=""
          />
        </div>
        <div className=" relative font-[mainFont300]">
          <div className="mt-[55vh]">
            <h1 className="text-[20vw] text-center uppercase leading-[18vw]">
              Soixan7e <br />
              Douze
            </h1>
          </div>
          <div className="pl-[40%] mt-20">
            <p className="text-6xl ">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Notre
              curiosité nourrit notre créativité. On reste humbles et on dit non
              aux gros egos, même le vôtre. Une marque est vivante. Elle a des
              valeurs, une personnalité, une histoire. Si on oublie ça, on peut
              faire de bons chiffres à court terme, mais on la tue à long terme.
              C’est pour ça qu’on s’engage à donner de la perspective, pour
              bâtir des marques influentes.
            </p>
          </div>
        </div>
      </div>
      <div className="section2 h-screen"></div>
    </div>
  );
};

export default Agence;
