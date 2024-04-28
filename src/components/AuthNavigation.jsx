import React from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

const AuthNavigation = () => {
  const emailName = localStorage.getItem("emailName");

  if (emailName) {
    return (
      <div className="flex items-center gap-1 text-[#754ffe] text-xl font-bold">
        <CgProfile size={30} />
        <span className="capitalize">{emailName}</span>
      </div>
    );
  }

  return (
    <Box sx={{ "& button:first-child": { mr: 2 } }}>
      <Link to="/login">
        <button className="cursor-pointer font-Poppins py-1.5 px-4 font-bold text-lg bg-transparent rounded-lg hover:shadow-lg border-2 border-[#754ffe] text-[#754ffe] transition duration-500 ease-in-out active:translate-y-4">
          Sign In
        </button>
      </Link>
      <Link to="/register">
        <button className="cursor-pointer font-Poppins py-1.5 px-4 font-bold text-lg text-white  bg-[#754ffe] rounded-lg hover:shadow-lg border-2 border-[#754ffe] transition duration-500 ease-in-out active:translate-y-4">
          Sign Up
        </button>
      </Link>
    </Box>
  );
};

export default AuthNavigation;
