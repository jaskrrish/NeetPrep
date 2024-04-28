import React, { useState, useEffect } from "react";
import { FaHome } from "react-icons/fa";
import ReactConfetti from "react-confetti";
import { Link } from "react-router-dom";
import { Contact } from "../components";

const ThanksPage = () => {
  const [confetti, setConfetti] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setConfetti(() => setConfetti(false));
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div>
        <h1 className="text-4xl text-center">
          <span className="bg-gradient-to-r from-[#754ffe] via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text text-5xl font-extrabold mx-4">
            Thank You
          </span>
          For Taking The Exam
        </h1>
        <p className="text-2xl text-center mt-5">
          Get ready for your moment of glory! Tomorrow, watch your inbox for
          detailed results and your All India Rank. 🌟📧
        </p>
      </div>
      <div className="mt-5 ">
        <Contact />
      </div>
      <ReactConfetti
        className={`w-screen h-screen transition duration-500 ease-in-out ${
          !confetti && "hidden"
        }`}
        tweenDuration={1000}
      />
    </div>
  );
};

export default ThanksPage;
