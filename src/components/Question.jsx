import React, { useState, useEffect } from "react";

const Question = ({
  question,
  selectedOption,
  onSaveAndNext,
  onClear,
  onSaveAndMarkForReview,
}) => {
  const [selected, setSelected] = useState(selectedOption || "");
  useEffect(() => {
    setSelected(selectedOption || "");
  }, [selectedOption]);

  const handleOptionChange = (e) => {
    setSelected(e.target.value);
  };

  const handleClear = () => {
    onClear(question.id);
    setSelected("");
  };

  const handleSaveAndNext = () => {
    if (!selected) {
      alert("Please select an option.");
    } else {
      onSaveAndNext(selected);
    }
  };

  const handleSaveAndMarkForReview = () => {
    if (!selected) {
      alert("Please select an option.");
    } else {
      onSaveAndMarkForReview(selected);
    }
  };

  return (
    <div className="w-[46rem] h-[30rem] ">
      <h2
        className="text-2xl w-[40rem] h-[6rem] m-4  font-semibold"
        style={{ userSelect: "none" }}
      >
        {question.id}. {question.question}
      </h2>
      <ul className="my-4">
        <li className="my-8">
          <input
            type="radio"
            name={`question-option_a`}
            id={`question-option_a`}
            value={question.option_a}
            checked={selected === question.option_a}
            onChange={handleOptionChange}
            className="hidden peer"
          />
          <label
            htmlFor={`question-option_a`}
            className="text-xl p-4 rounded-xl border-2 border-black/10 bg-white bg-opacity-35 backdrop-blur-lg peer-checked:bg-[#754ffe]/10 peer-checked:font-semibold peer-checked:tracking-wider peer-checked:border-[#754ffe] peer-checked:text-[#754ffe] cursor-pointer m-4 tracking-wider flex gap-4"
            style={{ userSelect: "none" }}
          >
            {question.option_a}
          </label>
        </li>
        <li className="my-8">
          <input
            type="radio"
            name={`question-option_b`}
            id={`question-option_b`}
            value={question.option_b}
            checked={selected === question.option_b}
            onChange={handleOptionChange}
            className="hidden peer"
          />
          <label
            htmlFor={`question-option_b`}
            className="text-xl p-4 rounded-xl border-2 border-black/10 bg-white bg-opacity-35 backdrop-blur-lg peer-checked:bg-[#754ffe]/10 peer-checked:font-semibold peer-checked:tracking-wider peer-checked:border-[#754ffe] peer-checked:text-[#754ffe] cursor-pointer m-4 tracking-wider flex gap-4"
            style={{ userSelect: "none" }}
          >
            {question.option_b}
          </label>
        </li>
        <li className="my-8">
          <input
            type="radio"
            name={`question-option_c`}
            id={`question-option_c`}
            value={question.option_c}
            checked={selected === question.option_c}
            onChange={handleOptionChange}
            className="hidden peer"
          />
          <label
            htmlFor={`question-option_c`}
            className="text-xl p-4 rounded-xl border-2 border-black/10 bg-white bg-opacity-35 backdrop-blur-lg peer-checked:bg-[#754ffe]/10 peer-checked:font-semibold peer-checked:tracking-wider peer-checked:border-[#754ffe] peer-checked:text-[#754ffe] cursor-pointer m-4 tracking-wider flex gap-4"
            style={{ userSelect: "none" }}
          >
            {question.option_c}
          </label>
        </li>
        <li className="my-8">
          <input
            type="radio"
            name={`question-option_d`}
            id={`question-option_d`}
            value={question.option_d}
            checked={selected === question.option_d}
            onChange={handleOptionChange}
            className="hidden peer"
          />
          <label
            htmlFor={`question-option_d`}
            className="text-xl p-4 rounded-xl border-2 border-black/10 bg-white bg-opacity-35 backdrop-blur-lg peer-checked:bg-[#754ffe]/10 peer-checked:font-semibold peer-checked:tracking-wider peer-checked:border-[#754ffe] peer-checked:text-[#754ffe] cursor-pointer m-4 tracking-wider flex gap-4"
            style={{ userSelect: "none" }}
          >
            {question.option_d}
          </label>
        </li>
      </ul>
      <div className="flex gap-4 ml-4">
        <button
          className="bg-green-600 text-white m-2 rounded-lg px-3 py-1.5 font-bold text-lg"
          onClick={handleSaveAndNext}
        >
          Save & Next
        </button>
        <button
          className="border-2 border-black m-2 px-3 py-1.5 font-bold text-lg rounded-lg"
          onClick={handleClear}
        >
          Clear
        </button>
        <button
          className="bg-blue-800 text-white m-2 px-3 py-1.5 font-bold text-lg rounded-lg"
          onClick={handleSaveAndMarkForReview}
        >
          Save & Mark for Review
        </button>
      </div>
    </div>
  );
};

export default Question;
