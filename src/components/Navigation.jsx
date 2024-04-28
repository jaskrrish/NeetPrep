import React from "react";
import Box from "@mui/material/Box";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";

const Navigation = () => {
  const navigations = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "About",
      path: "#about",
    },
    {
      label: "Exams",
      path: "#Upcoming",
    },
  ];

  return (
    <div>
      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}>
        {navigations.map(({ path, label }) =>
          label === "Exams" ? (
            <ScrollLink
              to="Upcoming"
              spy={true}
              key={path}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Box
                key={path}
                activeClass="current"
                sx={{
                  position: "relative",
                  color: "text.disabled",
                  cursor: "pointer",
                  fontWeight: 600,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  px: { xs: 0, md: 3 },
                  mb: { xs: 3, md: 0 },
                  fontSize: { xs: "1.2rem", md: "inherit" },

                  "& > div": { display: "none" },

                  "&.current>div": { display: "block" },

                  "&:hover": {
                    color: "#754ffe",
                    "&>div": {
                      display: "block",
                    },
                  },
                }}
              >
                {label}
              </Box>
            </ScrollLink>
          ) : (
            <Link to={path} key={path}>
              <Box
                key={path}
                activeClass="current"
                spy={true}
                smooth={true}
                duration={350}
                sx={{
                  position: "relative",
                  color: "text.disabled",
                  cursor: "pointer",
                  fontWeight: 600,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  px: { xs: 0, md: 3 },
                  mb: { xs: 3, md: 0 },
                  fontSize: { xs: "1.2rem", md: "inherit" },

                  "& > div": { display: "none" },

                  "&.current>div": { display: "block" },

                  "&:hover": {
                    color: "#754ffe",
                    "&>div": {
                      display: "block",
                    },
                  },
                }}
              >
                {label}
              </Box>
            </Link>
          )
        )}
      </Box>
    </div>
  );
};

export default Navigation;
