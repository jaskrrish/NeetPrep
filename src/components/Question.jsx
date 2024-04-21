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
      <h2 className="text-2xl w-[40rem] h-[6rem] m-4  font-semibold">
        {question.id}. {question.question}
      </h2>
      <ul className="my-4">
        {question.options.map((option, index) => (
          <li key={index} className="my-8">
            <label className="text-xl m-4">
              <input
                type="radio"
                name={`question-${question.id}`}
                value={option}
                checked={selected === option}
                onChange={handleOptionChange}
                className="mr-2"
              />
              {option}
            </label>
          </li>
        ))}
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
