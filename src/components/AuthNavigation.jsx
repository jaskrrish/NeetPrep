import React from "react";
import Box from "@mui/material/Box";

const AuthNavigation = () => {
  return (
    <Box sx={{ "& button:first-child": { mr: 2 } }}>
      <button className="cursor-pointer py-1.5 px-4 font-bold text-lg font-Outfit bg-transparent rounded-lg hover:shadow-lg border-2 border-[#754ffe] text-[#754ffe] transition duration-500 ease-in-out active:translate-y-4">
        Sign In
      </button>
      <button className="cursor-pointer py-1.5 px-4 font-bold text-lg font-Outfit text-white  bg-[#754ffe] rounded-lg hover:shadow-lg border-2 border-[#754ffe] transition duration-500 ease-in-out active:translate-y-4">
        Sign Up
      </button>
    </Box>
  );
};

export default AuthNavigation;
