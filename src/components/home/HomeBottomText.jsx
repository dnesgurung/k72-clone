import React from "react";
import { Link } from "react-router-dom";

const HomeBottomText = () => {
  return (
    <div className="font-[mainFont300] flex items-center justify-center gap-4">
      <div className="border-3 hover:border-[#D3FD50] hover:text-[#D3FD50] h-28 flex items-center px-10 border-white rounded-full uppercase leading-[6vw]">
        <Link className="text-[6.25vw] mt-4 font-[800]" to='/projects'>
          Projets
        </Link>
      </div>
      <div className="border-3 hover:border-[#D3FD50] hover:text-[#D3FD50] h-28 flex items-center px-10 border-white rounded-full uppercase leading-[6vw]">
        <Link className="text-[6.25vw] mt-4 font-[800]" to='/agence'>
          Agence
        </Link>
      </div>
    </div>
  );
};

export default HomeBottomText;
