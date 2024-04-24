import React from "react";
import Box from "@mui/material/Box";
import { Link as ScrollLink } from "react-scroll";

const Navigation = () => {
  const navigations = [
    {
      label: "Home",
      path: "#",
    },
    {
      label: "About",
      path: "#about",
    },
    {
      label: "Exams",
      path: "#Exams",
    },
    {
      label: "Contact Us",
      path: "#contact",
    },
  ];

  return (
    <div>
      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}>
        {navigations.map(({ path, label }) => (
          <Box
            component={ScrollLink}
            key={path}
            activeClass="current"
            to={path}
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
              ...(path === "/" && {
                color: "primary.main",
              }),

              "& > div": { display: "none" },

              "&.current>div": { display: "block" },

              "&:hover": {
                color: "primary.main",
                "&>div": {
                  display: "block",
                },
              },
            }}
          >
            {label}
          </Box>
        ))}
      </Box>
    </div>
  );
};

export default Navigation;
