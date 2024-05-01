import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import Navigation from "./Navigation";
import AuthNavigation from "./AuthNavigation";
import { useTheme } from "@mui/material/styles";
import { Menu, Close } from "@mui/icons-material";
import Logo from "./Logo";
import { useLocation } from "react-router-dom";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const location = useLocation();
  const [visibleMenu, setVisibleMenu] = useState(false);
  const { breakpoints } = useTheme();
  const matchMobileView = useMediaQuery(breakpoints.down("md"));
  const [timeLeft, setTimeLeft] = useState(null);
  const [ribbon, setRibbon] = useState(true);

  const updateTimeLeft = () => {
    const now = new Date();
    const eventDate = new Date("2024-05-02");
    const timeLeft = eventDate - now;

    setTimeLeft(timeLeft > 0 ? timeLeft : null);
  };

  useEffect(() => {
    updateTimeLeft();

    const timerId = setInterval(updateTimeLeft, 1000);

    return () => clearInterval(timerId);
  }, []);

  const handleRibbon = () => {
    setRibbon(false);
  };

  if (location.pathname === "/exam" || location.pathname === "/rules") {
    return null;
  }

  return (
    <div>
      {location.pathname === "/" && (
        <div
          className={`md:flex sm:hidden justify-between border-b-2 border-b-[#4728b9] top-0 py-4 text-white bg-gradient-to-r from-[#55e7d4] via-[#736efe] ${
            !ribbon && "hidden"
          }`}
        >
          <div className="font-Poppins flex font-bold sm:text-sm md:text-lg ml-[2rem]">
            <p className="text-clip">
              ✨The Next All India Neet Test is happening in
            </p>
            <span className="font-bold sm:text-lg md:text-xl mx-2">
              {Math.floor(timeLeft / (1000 * 60 * 60))} hrs:{" "}
              {Math.floor((timeLeft / (1000 * 60)) % 60)} min:{" "}
              {Math.floor((timeLeft / 1000) % 60)} sec
            </span>
          </div>
          <button onClick={handleRibbon} className="mr-[3rem] text-black">
            <IoClose size={30} />
          </button>
        </div>
      )}
      <Box sx={{ backgroundColor: "background.paper" }}>
        <Container sx={{ py: { xs: 2, md: 3 } }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Logo />
            <Box
              sx={{
                ml: "auto",
                display: { xs: "inline-flex", md: "none" },
              }}
            >
              <AuthNavigation />
              <IconButton onClick={() => setVisibleMenu(!visibleMenu)}>
                <Menu />
              </IconButton>
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: { xs: "column", md: "row" },

                transition: (theme) => theme.transitions.create(["top"]),
                ...(matchMobileView && {
                  py: 6,
                  backgroundColor: "background.paper",
                  zIndex: "appBar",
                  position: "fixed",
                  height: { xs: "100vh", md: "auto" },
                  top: visibleMenu ? 0 : "-120vh",
                  left: 0,
                }),
              }}
            >
              <Box /> {/* Magic space */}
              <Navigation />
              <AuthNavigation />
              {visibleMenu && matchMobileView && (
                <IconButton
                  sx={{
                    position: "fixed",
                    top: 10,
                    right: 10,
                  }}
                  onClick={() => setVisibleMenu(!visibleMenu)}
                >
                  <Close />
                </IconButton>
              )}
            </Box>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default Header;
