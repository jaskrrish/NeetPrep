import React, { useState, useEffect } from "react";
import { FaHome } from "react-icons/fa";
import ReactConfetti from "react-confetti";
import { Link } from "react-router-dom";

const ThanksPage = () => {
  const [confetti, setConfetti] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setConfetti(() => setConfetti(false));
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <div>
        <h1 className="text-4xl text-center">
          <span className="bg-gradient-to-r from-[#754ffe] via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text text-5xl font-extrabold mx-4">
            Thank You
          </span>
          For Taking The Exam
        </h1>
        <p className="text-2xl text-center mt-5">
          Results will be declared soon.
        </p>
      </div>
      <div className="mt-10 ">
        <Link to="/">
          <button className="border-[0.25rem] text-[#3a2588] rounded-lg border-[#754ffe] text-xl px-4 py-1 flex transition duration-500 ease-in-out active:translate-y-4 hover:bg-[#754ffe] hover:text-white active:bg-[#754ffe] active:text-white">
            <span className="mx-2 my-1">Home</span>{" "}
            <FaHome size={25} className="mx-2 my-1" />{" "}
          </button>
        </Link>
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
