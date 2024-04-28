import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Bitmap from "../assets/Bitmap.png";
import { Link } from "react-router-dom";
import HeroBg from "../assets/home-hero.jpg";

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState(null);
  const authToken = localStorage.getItem("authToken");

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
                      Ignite{" "}
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
                    Your{" "}
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
                      Potential,
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
                    Dominate the Test.
                  </Typography>
                </Box>
                <Box sx={{ mb: 4, width: { xs: "100%", md: "70%" } }}>
                  <Typography
                    sx={{
                      color: "text.secondary",
                      lineHeight: 1.6,
                      fontSize: "19px",
                    }}
                  >
                    "Are you ready to unleash your academic brilliance? The
                    Ultimate Mock Test Challenge awaits you on <br />
                    <span className="mr-2 text-[#754ffe] font-bold">
                      May 2nd, 2024!
                    </span>
                    Get set to turbocharge your learning journey and conquer
                    your exams like a pro. Dive into a world of stimulating
                    questions, exhilarating challenges, and unparalleled
                    preparation. Join us as we redefine the way you approach
                    exams. Don't just aim to pass – strive to excel! <br />{" "}
                    Register now and pave the way for your academic success!"
                  </Typography>
                </Box>
                <Box className="flex" sx={{ "& button": { mr: 2 } }}>
                  <Link to="/register">
                    <button className="cursor-pointer py-2 px-4 font-bold text-lg font-Poppins text-white bg-[#754ffe] rounded-lg hover:shadow-lg border-2 border-[#754ffe] hover:bg-white hover:text-[#754ffe] transition duration-500 ease-in-out active:translate-y-4">
                      Register Yourself
                    </button>
                  </Link>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={5} sx={{ position: "relative" }}>
              <Box sx={{ lineHeight: 0 }}>
                <img src={HeroBg} width={775} height={787} alt="Hero img" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <hr className="border-[#754ffe] sm:mx-[5rem] md:mx-[9rem] border-[1.5px]" />
      <div className="w-screen my-[4rem] flex flex-wrap-reverse justify-center items-center">
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
      <hr className="border-[#754ffe] sm:mx-[5rem] md:mx-[9rem] border-[1.5px]" />
      <div
        id="Upcoming"
        className="mt-[2rem] flex flex-col items-center justify-center"
      >
        <p className="text-3xl text-[#754ffe] font-Poppins text-center font-bold m-4">
          Upcoming Tests
        </p>
        <div className="my-[3rem] ">
          <table className="sm:w-[30rem] md:w-[70rem] text-center">
            <thead className="bg-gray-50 border-gray-200">
              <tr>
                <th className="px-4 text-2xl py-4 font-semibold tracking-wide">
                  Tests
                </th>
                <th className="px-4 py-4 text-2xl font-semibold tracking-wide">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4 text-xl">NEET-2024 Mock Test</td>
                <td className="p-4 text-xl text-[#754ffe] text-center font-bold">
                  2nd May,2024
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex justify-end my-4">
          {timeLeft === null ? (
            <Link to={authToken ? "/rules" : "/register"}>
              <button className="cursor-pointer py-1.5 px-8 font-bold text-xl font-Poppins text-white bg-[#754ffe] rounded-lg hover:shadow-lg border-2 border-[#754ffe] hover:bg-white hover:text-[#754ffe] transition duration-500 ease-in-out active:translate-y-4">
                Give Test
              </button>
            </Link>
          ) : (
            <div className="cursor-pointer py-1.5 px-4 font-bold text-lg font-Poppins hover:text-white hover:bg-[#754ffe] rounded-lg hover:shadow-lg border-2 border-[#754ffe] bg-white text-[#754ffe] transition duration-500 ease-in-out active:translate-y-4">
              Time left:
              <span className="mx-2">
                {Math.floor(timeLeft / (1000 * 60 * 60))} hrs:{" "}
                {Math.floor((timeLeft / (1000 * 60)) % 60)} min:{" "}
                {Math.floor((timeLeft / 1000) % 60)} sec
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
