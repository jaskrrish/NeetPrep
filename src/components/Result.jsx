import React from "react";
import { IoClose } from "react-icons/io5";

const Result = ({ result, resultModal, handleResultModal }) => {
  return (
    <div
      className={`${
        !resultModal && "hidden"
      } fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center`}
    >
      <div className="m-4 mb-6 flex justify-end">
        <button onClick={handleResultModal}>
          <IoClose
            size={30}
            className="hover:text-[#754ffe] hover:scale-110 transition duration-200 ease-in-out"
          />
        </button>
      </div>
      <div className="w-[50rem] h-[30rem] bg-white rounded-md shadow-lg">
        <p className="text-center font-Poppins text-3xl">Result</p>
        <p className="text-center font-Poppins text-xl m-4">
          total marks: {result.totalMarks}
        </p>
      </div>
    </div>
  );
};

export default Result;
