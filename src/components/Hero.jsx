import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Link as ScrollLink } from "react-scroll";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Bitmap from "../assets/Bitmap.png";

const exps = [
  {
    label: "Students",
    value: "10K+",
  },
  {
    label: "Quality Course",
    value: "20+",
  },
  {
    label: "Experience Mentors",
    value: "10+",
  },
];

const ExpItem = ({ item }) => {
  const { value, label } = item;
  return (
    <Box sx={{ textAlign: "center", mb: { xs: 1, md: 0 } }}>
      <Typography
        sx={{
          color: "#754ffe",
          mb: { xs: 1, md: 2 },
          fontSize: { xs: 34, md: 44 },
          fontWeight: "bold",
        }}
      >
        {value}
      </Typography>
      <Typography color="text.secondary" variant="h5">
        {label}
      </Typography>
    </Box>
  );
};

const Hero = () => {
  return (
    <div>
      <Box
        id="hero"
        sx={{
          backgroundColor: "background.paper",
          position: "relative",
          pt: 4,
          pb: { xs: 8, md: 10 },
        }}
      >
        <Container maxWidth="lg">
          <Grid
            container
            spacing={0}
            sx={{ flexDirection: { xs: "column", md: "unset" } }}
          >
            <Grid item xs={12} md={7}>
              <Box
                sx={{
                  textAlign: { xs: "center", md: "left" },
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Box sx={{ mb: 3 }}>
                  <Typography
                    component="h2"
                    sx={{
                      position: "relative",
                      fontSize: { xs: 40, md: 72 },
                      letterSpacing: 1.5,
                      fontWeight: "bold",
                      lineHeight: 1.3,
                    }}
                  >
                    <Typography
                      component="mark"
                      sx={{
                        position: "relative",
                        color: "#754ffe",
                        fontSize: "inherit",
                        fontWeight: "inherit",
                        backgroundColor: "unset",
                      }}
                    >
                      Improve{" "}
                      <Box
                        sx={{
                          position: "absolute",
                          top: { xs: 24, md: 34 },
                          left: 2,
                          transform: "rotate(3deg)",
                          "& img": {
                            width: { xs: 146, md: 210 },
                            height: "auto",
                          },
                        }}
                      ></Box>
                    </Typography>
                    your{" "}
                    <Typography
                      component="span"
                      sx={{
                        fontSize: "inherit",
                        fontWeight: "inherit",
                        position: "relative",
                        "& svg": {
                          position: "absolute",
                          top: -16,
                          right: -21,
                          width: { xs: 22, md: 30 },
                          height: "auto",
                        },
                      }}
                    >
                      Skill
                      <svg version="1.1" viewBox="0 0 3183 3072">
                        <g id="Layer_x0020_1">
                          <path
                            fill="#754ffe"
                            d="M2600 224c0,0 0,0 0,0 236,198 259,562 52,809 -254,303 -1849,2089 -2221,1776 -301,-190 917,-1964 1363,-2496 207,-247 570,-287 806,-89z"
                          />
                          <path
                            fill="#754ffe"
                            d="M3166 2190c0,0 0,0 0,0 64,210 -58,443 -270,516 -260,90 -1848,585 -1948,252 -104,-230 1262,-860 1718,-1018 212,-73 437,39 500,250z"
                          />
                          <path
                            fill="#754ffe"
                            d="M566 3c0,0 0,0 0,0 -219,-26 -427,134 -462,356 -44,271 -255,1921 90,1962 245,62 628,-1392 704,-1869 36,-221 -114,-424 -332,-449z"
                          />
                        </g>
                      </svg>
                    </Typography>{" "}
                    <br />
                    with Different Way
                  </Typography>
                </Box>
                <Box sx={{ mb: 4, width: { xs: "100%", md: "70%" } }}>
                  <Typography sx={{ color: "text.secondary", lineHeight: 1.6 }}>
                    {
                      "Let's take an online course to improve your skills in a different way, you can set your own study time according to your learning speed. So you san study comfortable and absorb tge material easily."
                    }
                  </Typography>
                </Box>
                <Box className="flex" sx={{ "& button": { mr: 2 } }}>
                  <ScrollLink
                    to="popular-course"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={350}
                  >
                    <button className="py-1.5 px-4 font-bold text-lg font-Outfit text-white bg-[#754ffe] rounded-lg hover:shadow-lg border-2 border-[#754ffe] hover:bg-white hover:text-[#754ffe] transition duration-500 ease-in-out active:translate-y-4">
                      Get Started
                    </button>
                  </ScrollLink>
                  <ScrollLink
                    to="video-section"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={350}
                  >
                    <button className="flex py-1.5 px-4 font-bold text-lg font-Outfit bg-transparent rounded-lg hover:shadow-lg border-2 border-[#754ffe] hover:bg-white text-[#754ffe] transition duration-500 ease-in-out active:translate-y-4">
                      <PlayArrowIcon />
                      Watch Video
                    </button>
                  </ScrollLink>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={5} sx={{ position: "relative" }}>
              <Box sx={{ lineHeight: 0 }}>
                <img
                  src="/src/assets/home-hero.jpg"
                  width={775}
                  height={787}
                  alt="Hero img"
                />
              </Box>
            </Grid>
          </Grid>

          {/* Experience */}
          <Box sx={{ boxShadow: 2, py: 4, px: 7, borderRadius: 4 }}>
            <Grid container spacing={2}>
              {exps.map((item) => (
                <Grid key={item.value} item xs={12} md={4}>
                  <ExpItem item={item} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
      <div className="w-screen my-6 flex flex-wrap-reverse justify-center items-center">
        <div className="mx-8 font-Poppins">
          <p className="capitalize tracking-wider m-6 text-left sm:text-5xl text-4xl font-bold">
            Take Online Exam.
          </p>
          <p className="uppercase mt-[2rem] text-left text-2xl">
            Number of Active users right now
          </p>
          <p className="text-center text-2xl font-extrabold text-[#754ffe] mt-[2rem]">
            200+
          </p>
        </div>
        <div>
          <img src={Bitmap} alt="Bitmap" className="w-[20rem] mx-10" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
