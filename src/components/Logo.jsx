import React from "react";
import logo from "../assets/neetfodologo.png";

const Logo = () => {
  return (
    <div>
      <img
        src={logo}
        alt="NEET FODO"
        className="w-[8.5rem] h-[5.5rem] mx-auto"
      />
    </div>
  );
};

export default Logo;
