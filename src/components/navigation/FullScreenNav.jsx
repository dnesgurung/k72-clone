import React from "react";

const FullScreenNav = () => {
  return (
    <div id="fullScreenNav" className="h-screen w-full absolute bg-amber-900">
      <div id="all-links" className="mt-[10vw]">
        <div className="relative link border-t-1">
          <h1 className="font-[mainFont500] text-[8vw] text-center leading-[0.8] pt-5 uppercase">
            Projets
          </h1>
          <div className="absolute flex top-0 bg-[#D3FD50]">
            <div className="flex overflow-x-auto items-center ">
              <h2 className="whitespace-nowrap font-[mainFont500] text-[8vw] text-center leading-[0.8] pt-5 uppercase">
                Pour Tout Voir
              </h2>
              <img className="h-25 w-70 shrink-0 object-cover rounded-full" src="../src/assets/images/nav-projets.jpg" alt="" />
              <h2 className="whitespace-nowrap font-[mainFont500] text-[8vw] text-center leading-[0.8] pt-5 uppercase">
                Pour Tout Voir
              </h2>
              <img className="h-25 w-70 shrink-0 object-cover rounded-full" src="../src/assets/images/nav-projets2.jpg" alt="" />
            </div>
            {/* <div>
              <h2>Pour Tout Voir</h2>
              <img src="../src/assets/images/nav-projets.jpg" alt="" />
              <h2>Pour Tout Voir</h2>
              <img src="../src/assets/images/nav-projets2.jpg" alt="" />
            </div> */}
          </div>
        </div>
      </div>
      {/*
        <div id="all-links" className="mt-[10vw]">
          <div className="link border-t-1">
            <h1 className="font-[mainFont500] text-[8vw] text-center leading-[0.8] pt-5 uppercase">
              Agence
            </h1>
             <div>
            <div>
              <h2>Pour Tout Voir</h2>
              <img src="../src/assets/images/nav-projets.jpg" alt="" />
              <h2>Pour Tout Voir</h2>
              <img src="../src/assets/images/nav-projets2.jpg" alt="" />
            </div>
            <div>
              <h2>Pour Tout Voir</h2>
              <img src="../src/assets/images/nav-projets.jpg" alt="" />
              <h2>Pour Tout Voir</h2>
              <img src="../src/assets/images/nav-projets2.jpg" alt="" />
            </div>
          
        </div>
      </div>
          </div> */}
    </div>
  );
};

export default FullScreenNav;
