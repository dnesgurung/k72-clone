import React, { useContext, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const FullScreenNav = () => {
  const fullNavLinksRef = useRef(null);



  useGSAP(function () {
    const tl = gsap.timeline();

    tl.from(".stairs", {
      delay: 1,
      height: 0,
      stagger: {
        amount: -0.25,
      },
    });
    tl.from(fullNavLinksRef.current, {
      opacity: 0,
    });
    tl.from(".link", {
      opacity: 0,
      rotateX: 90,
      stagger: {
        amount: -0.25,
      },
    });
  });

  return (
    <div
      id="fullScreenNav"
      className="fullScreenNav hidden overflow-hidden h-screen  w-full absolute z-50"
    >
      <div className="h-screen w-full fixed ">
        <div className="h-full w-full flex">
          <div className="stairs h-full w-1/5 bg-black"></div>
          <div className="stairs h-full w-1/5 bg-black"></div>
          <div className="stairs h-full w-1/5 bg-black"></div>
          <div className="stairs h-full w-1/5 bg-black"></div>
          <div className="stairs h-full w-1/5 bg-black"></div>
        </div>
      </div>

      <div ref={fullNavLinksRef} id="nav-menu" className="relative">
        <div id="k72-logo" className="flex w-full justify-between items-start">
          <div className="p-3">
            <div className=" w-31">
              <svg
                className="h-full w-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 103 44"
              >
                <path
                  fill="white"
                  fillRule="evenodd"
                  d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        <div
          id="cross-logo"
          className="h-30 w-30 absolute top-3 right-2 cursor-pointer "
        >
          <div className="h-40 w-0.5 -rotate-45 origin-top transform absolute bg-white"></div>
          <div className="h-40 w-0.5 rotate-45 right-0 origin-top transform absolute bg-white"></div>
        </div>
        <div id="all-links" className=" mt-[10vw]">
          <div className="link origin-top relative border-t-1 border-white">
            <h1 className="font-[mainFont500] text-[8vw] text-center leading-[0.8] pt-5 uppercase">
              Projets
            </h1>

            <div className=" moveLink absolute text-black flex top-0 bg-[#D3FD50]">
              <div className="moveX flex items-center ">
                <h2 className="whitespace-nowrap font-[mainFont500] text-[8vw] text-center leading-[0.8] pt-5 uppercase">
                  {" "}
                  Pour Tout Voir
                </h2>
                <img
                  className="h-25 w-70 shrink-0 object-cover rounded-full"
                  src="../src/assets/images/nav-projets.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[mainFont500] text-[8vw] text-center leading-[0.8] pt-5 uppercase">
                  {" "}
                  Pour Tout Voir{" "}
                </h2>
                <img
                  className="h-25 w-70 shrink-0 object-cover rounded-full"
                  src="../src/assets/images/nav-projets2.jpg"
                  alt=""
                />
              </div>
              <div className="moveX flex items-center ">
                <h2 className="whitespace-nowrap font-[mainFont500] text-[8vw] text-center leading-[0.8] pt-5 uppercase">
                  {" "}
                  Pour Tout Voir
                </h2>
                <img
                  className="h-25 w-70 shrink-0 object-cover rounded-full"
                  src="../src/assets/images/nav-projets.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[mainFont500] text-[8vw] text-center leading-[0.8] pt-5 uppercase">
                  {" "}
                  Pour Tout Voir{" "}
                </h2>
                <img
                  className="h-25 w-70 shrink-0 object-cover rounded-full"
                  src="../src/assets/images/nav-projets2.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="link origin-top relative border-t-1 border-white">
            <h1 className="font-[mainFont500] text-[8vw] text-center leading-[0.8] pt-5 uppercase">
              Projets
            </h1>

            <div className=" moveLink absolute text-black flex top-0 bg-[#D3FD50]">
              <div className="moveX flex items-center ">
                <h2 className="whitespace-nowrap font-[mainFont500] text-[8vw] text-center leading-[0.8] pt-5 uppercase">
                  {" "}
                  Pour Tout Voir
                </h2>
                <img
                  className="h-25 w-70 shrink-0 object-cover rounded-full"
                  src="../src/assets/images/nav-projets.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[mainFont500] text-[8vw] text-center leading-[0.8] pt-5 uppercase">
                  {" "}
                  Pour Tout Voir{" "}
                </h2>
                <img
                  className="h-25 w-70 shrink-0 object-cover rounded-full"
                  src="../src/assets/images/nav-projets2.jpg"
                  alt=""
                />
              </div>
              <div className="moveX flex items-center ">
                <h2 className="whitespace-nowrap font-[mainFont500] text-[8vw] text-center leading-[0.8] pt-5 uppercase">
                  {" "}
                  Pour Tout Voir
                </h2>
                <img
                  className="h-25 w-70 shrink-0 object-cover rounded-full"
                  src="../src/assets/images/nav-projets.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[mainFont500] text-[8vw] text-center leading-[0.8] pt-5 uppercase">
                  {" "}
                  Pour Tout Voir{" "}
                </h2>
                <img
                  className="h-25 w-70 shrink-0 object-cover rounded-full"
                  src="../src/assets/images/nav-projets2.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="link origin-top relative border-t-1 border-white">
            <h1 className="font-[mainFont500] text-[8vw] text-center leading-[0.8] pt-5 uppercase">
              Projets
            </h1>

            <div className=" moveLink absolute text-black flex top-0 bg-[#D3FD50]">
              <div className="moveX flex items-center ">
                <h2 className="whitespace-nowrap font-[mainFont500] text-[8vw] text-center leading-[0.8] pt-5 uppercase">
                  {" "}
                  Pour Tout Voir
                </h2>
                <img
                  className="h-25 w-70 shrink-0 object-cover rounded-full"
                  src="../src/assets/images/nav-projets.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[mainFont500] text-[8vw] text-center leading-[0.8] pt-5 uppercase">
                  {" "}
                  Pour Tout Voir{" "}
                </h2>
                <img
                  className="h-25 w-70 shrink-0 object-cover rounded-full"
                  src="../src/assets/images/nav-projets2.jpg"
                  alt=""
                />
              </div>
              <div className="moveX flex items-center ">
                <h2 className="whitespace-nowrap font-[mainFont500] text-[8vw] text-center leading-[0.8] pt-5 uppercase">
                  {" "}
                  Pour Tout Voir
                </h2>
                <img
                  className="h-25 w-70 shrink-0 object-cover rounded-full"
                  src="../src/assets/images/nav-projets.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[mainFont500] text-[8vw] text-center leading-[0.8] pt-5 uppercase">
                  {" "}
                  Pour Tout Voir{" "}
                </h2>
                <img
                  className="h-25 w-70 shrink-0 object-cover rounded-full"
                  src="../src/assets/images/nav-projets2.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="link origin-top relative border-y-1 border-white">
            <h1 className="font-[mainFont500] text-[8vw] text-center leading-[0.8] pt-5 uppercase">
              Projets
            </h1>

            <div className=" moveLink absolute text-black flex top-0 bg-[#D3FD50]">
              <div className="moveX flex items-center ">
                <h2 className="whitespace-nowrap font-[mainFont500] text-[8vw] text-center leading-[0.8] pt-5 uppercase">
                  {" "}
                  Pour Tout Voir
                </h2>
                <img
                  className="h-25 w-70 shrink-0 object-cover rounded-full"
                  src="../src/assets/images/nav-projets.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[mainFont500] text-[8vw] text-center leading-[0.8] pt-5 uppercase">
                  {" "}
                  Pour Tout Voir{" "}
                </h2>
                <img
                  className="h-25 w-70 shrink-0 object-cover rounded-full"
                  src="../src/assets/images/nav-projets2.jpg"
                  alt=""
                />
              </div>
              <div className="moveX flex items-center ">
                <h2 className="whitespace-nowrap font-[mainFont500] text-[8vw] text-center leading-[0.8] pt-5 uppercase">
                  {" "}
                  Pour Tout Voir
                </h2>
                <img
                  className="h-25 w-70 shrink-0 object-cover rounded-full"
                  src="../src/assets/images/nav-projets.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[mainFont500] text-[8vw] text-center leading-[0.8] pt-5 uppercase">
                  {" "}
                  Pour Tout Voir{" "}
                </h2>
                <img
                  className="h-25 w-70 shrink-0 object-cover rounded-full"
                  src="../src/assets/images/nav-projets2.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenNav;
