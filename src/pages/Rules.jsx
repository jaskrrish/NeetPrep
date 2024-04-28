import React, { useState } from "react";
import { Link } from "react-router-dom";

const Rules = () => {
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  return (
    <div className="mb-[4rem] mt-[2rem]">
      <p className="text-3xl text-center my-[2rem] font-bold font-Poppins text-[#754ffe]">
        Please read the instructions carefully
      </p>
      <div className="mx-[5rem]">
        <p className="text-xl text-left font-Poppins my-4 font-semibold">
          <span className="underline">General Instruction</span> :
        </p>
        <ul className="font-Poppins text-lg list-disc list-inside">
          <li className="my-3">Total duration of NEET is 180 min.</li>
          <li className="my-3">
            The clock will be set at the server. The countdown timer in the top
            right corner of screen will display the remaining time available for
            you to complete the examination. When the timer reaches zero, the
            examination will end by itself. You will not be required to end or
            submit your examination.
          </li>
          <li className="my-3">
            The Questions Palette displayed on the right side of screen will
            show the status of each question using one of the following symbols:
            <li className="text-center my-3 mx-[8rem] flex items-center justify-start">
              <button className="bg-gray-400 mx-2 text-white font-bold w-[3rem] m-1 h-[3rem] rounded-tr-xl rounded-bl-xl shadow-sm hover:shadow-xl p-4"></button>
              You have not visited or Not Answered the question yet.
            </li>
            <li className="text-center my-3 mx-[8rem] flex items-center justify-start">
              <button className="bg-green-500 mx-2 text-white font-bold w-[3rem] m-1 h-[3rem] rounded-tr-xl rounded-bl-xl shadow-sm hover:shadow-xl p-4"></button>
              You have answered the question.
            </li>
            <li className="text-center my-3 mx-[8rem] flex items-center justify-start">
              <button className="bg-violet-800 mx-2 text-white font-bold w-[3rem] m-1 h-[3rem] rounded-tr-xl rounded-bl-xl shadow-sm hover:shadow-xl p-4"></button>
              The question(s) "Answered and Marked for Review" will be
              considered for evalution.
            </li>
          </li>
          <li className="my-3">
            You can click on the "&lt;" arrow which apperes to the left of
            question palette to collapse the question palette thereby maximizing
            the question window. To view the question palette again, you can
            click on "&gt;" which appears on the right side of question window.
          </li>
        </ul>
      </div>
      <div className="mx-[5rem]">
        <p className="text-xl text-left font-Poppins my-4 font-semibold">
          <span className="underline">Navigate to a Question</span> :
        </p>
        <ul className="font-Poppins text-lg list-disc list-inside">
          <li className="my-3">
            To answer a question, do the following:
            <li className="my-3 mx-[8rem] flex items-center justify-start">
              a. Click on the question number in the Question Palette at the
              right of your screen to go to that numbered question directly.
              Note that using this option does NOT save your answer to the
              current question.
            </li>
            <li className="my-3 mx-[8rem] flex items-center justify-start">
              b. Click on <span className="font-bold mx-2"> Save & Next</span>{" "}
              to save your answer for the current question and then go to the
              next question.
            </li>
            <li className="my-3 mx-[8rem] flex items-center justify-start">
              c. Click on{" "}
              <span className="font-bold mx-2">Save & Mark For Review</span> to
              save your answer for the current question, mark it for review, and
              then go to the next question.
            </li>
          </li>
        </ul>
      </div>
      <div className="mx-[5rem]">
        <p className="text-xl text-left font-Poppins my-4 font-semibold">
          <span className="underline">Answering a Question</span> :
        </p>
        <ul className="font-Poppins text-lg list-disc list-inside">
          <li className="my-3">
            Procedure for answering a multiple choice type question:
            <li className="my-3 mx-[8rem] flex items-center justify-start">
              a. Procedure for answering a multiple choice type question
            </li>
            <li className="my-3 mx-[8rem] flex items-center justify-start">
              b. Procedure for answering a multiple choice type question{" "}
              <span className="font-bold mx-2"> Clear</span> button.
            </li>
            <li className="my-3 mx-[8rem] flex items-center justify-start">
              c. To change your chosen answer, click on the button of another
              option.
            </li>
            <li className="my-3 mx-[8rem] flex items-center justify-start">
              d. To save your answer, you MUST click on the Save & Next button.
            </li>
            <li className="my-3 mx-[8rem] flex items-center justify-start">
              e. To mark the question for review, click on the Save & Mark for
              Review button.
            </li>
          </li>
          <li className="my-3">
            To change your answer to a question that has already been answered,
            first select that question for answering and then follow the
            procedure for answering that type of question.
          </li>
        </ul>
      </div>
      <div className="mx-[5rem]">
        <p className="text-xl text-left font-Poppins my-4 font-semibold">
          <span className="underline">Navigating through Sections</span> :
        </p>
        <ul className="font-Poppins text-lg list-disc list-inside">
          <li className="my-3">
            Sections in this question paper are displayed on the top bar of the
            screen. Questions in a section can be viewed by click on the section
            name. The section you are currently viewing is highlighted.
          </li>
          <li className="my-3">
            After click the Save & Next button on the last question for a
            section, you will automatically be taken to the first question of
            the next section.
          </li>
          <li className="my-3">
            You can shuffle between sections and questions anything during the
            examination as per your convenience only during the time stipulated.
          </li>
          <li className="my-3">
            Candidate can view the corresponding section summary as part of the
            legend that appears in every section above the question palette.
          </li>
        </ul>
      </div>
      <div className="mx-[5rem] my-4 py-4 border-t-2 border-b-2 text-red-500">
        <input
          type="checkbox"
          id="instructions"
          className="mr-2"
          onChange={() => setIsCheckboxChecked((checked) => !checked)}
        />
        <label htmlFor="instructions" className="text-lg">
          I have read all the instructions.
        </label>
      </div>
      <div className="flex items-center justify-center">
        <Link to="/exam">
          <button
            className="py-2 w-[20rem] font-bold text-lg font-Poppins text-white mt-2 bg-[#754ffe] rounded-lg hover:shadow-lg border-2 border-[#754ffe] hover:bg-white hover:text-[#754ffe] transition duration-500 ease-in-out active:translate-y-4 disabled:opacity-80 disabled:cursor-not-allowed"
            disabled={!isCheckboxChecked}
          >
            Start the Exam
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Rules;
