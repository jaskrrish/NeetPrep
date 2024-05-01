import React from "react";
import logo from "../assets/neetfodologo.png";

const Logo = () => {
  return (
    <div>
      <img
        src={logo}
        alt="NEET FODO"
        className="sm:w-[8rem] sm:h-[5rem] h-[4.5rem] w-[7rem] mx-auto"
      />
    </div>
  );
};

export default Logo;
