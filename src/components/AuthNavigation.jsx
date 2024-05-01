import React from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { FaWhatsapp } from "react-icons/fa";
import Lottie from "lottie-react";
import Animation from "../assets/animation.json";
import { useMediaQuery } from "@material-ui/core";

const AuthNavigation = () => {
  const emailName = localStorage.getItem("emailName");
  const matches = useMediaQuery("(max-width:600px)");

  if (emailName) {
    return (
      <div className="flex gap-4">
        <Link to="https://chat.whatsapp.com/I2SLgcFjtEz0XlnmtZm9ka">
          <button className="flex gap-3 cursor-pointer font-Poppins py-1.5 px-4 font-bold text-lg bg-transparent rounded-lg hover:shadow-lg border-2 border-[#754ffe] text-[#754ffe] transition duration-500 ease-in-out active:translate-y-4">
            <p>Whatsapp</p>
            <FaWhatsapp size={28} className="text-[#128C7E]" />
          </button>
        </Link>
        <div className="flex items-center gap-1 text-[#754ffe] text-xl font-bold">
          <CgProfile size={30} />
          <span className="capitalize">{emailName}</span>
        </div>
      </div>
    );
  }

  return matches ? (
    <div className="flex gap-3 items-center justify-center">
      <Link to="https://chat.whatsapp.com/I2SLgcFjtEz0XlnmtZm9ka">
        <Lottie animationData={Animation} className="w-[3rem]" />
      </Link>
      <Link to="/register">
        <button
          className="cursor-pointer font-Poppins py-1 px-2
         font-bold md:text-lg sm:text-sm text-white  bg-[#754ffe] rounded-lg hover:shadow-lg border-2 border-[#754ffe] transition duration-500 ease-in-out active:translate-y-4"
        >
          Register
        </button>
      </Link>
    </div>
  ) : (
    <Box
      sx={{ "& button:first-child": { mr: 2 } }}
      className="flex gap-3 items-center justify-center"
    >
      <Link to="https://chat.whatsapp.com/I2SLgcFjtEz0XlnmtZm9ka">
        <Lottie animationData={Animation} className="w-[3rem]" />
      </Link>
      <Link to="/login">
        <button className="cursor-pointer font-Poppins md:py-1.5 md:px-4 sm:py-1 sm:px-2 font-bold md:text-lg sm:text-sm bg-transparent rounded-lg hover:shadow-lg border-2 border-[#754ffe] text-[#754ffe] transition duration-500 ease-in-out active:translate-y-4">
          Sign In
        </button>
      </Link>
      <Link to="/register">
        <button className="cursor-pointer font-Poppins md:py-1.5 md:px-4 sm:py-1 sm:px-2 font-bold md:text-lg sm:text-sm text-white  bg-[#754ffe] rounded-lg hover:shadow-lg border-2 border-[#754ffe] transition duration-500 ease-in-out active:translate-y-4">
          Sign Up
        </button>
      </Link>
    </Box>
  );
};

export default AuthNavigation;
