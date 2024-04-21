import React, { useState, useEffect } from "react";
import { Question } from "../components";

const Exam = () => {
  const questions = {
    Biology: [
      {
        id: 1,
        question:
          "Which of the following is not a function of the human skeletal system?",
        options: [
          "Support",
          "Protection",
          "Contraction",
          "Storage of minerals",
        ],
        answer: "Contraction",
      },
      {
        id: 2,
        question: "What is the powerhouse of the cell?",
        options: [
          "Ribosome",
          "Nucleus",
          "Mitochondria",
          "Endoplasmic reticulum",
        ],
        answer: "Mitochondria",
      },
      {
        id: 3,
        question: "What is the primary function of the respiratory system?",
        options: [
          "Transportation of gases",
          "Excretion of waste",
          "Regulation of body temperature",
          "Nutrient absorption",
        ],
        answer: "Transportation of gases",
      },
      {
        id: 4,
        question:
          "Which of the following is not a type of tissue in the human body?",
        options: ["Epithelial", "Muscle", "Nervous", "Regulatory"],
        answer: "Regulatory",
      },
      {
        id: 5,
        question: "What is the function of the stomata in plants?",
        options: [
          "Photosynthesis",
          "Respiration",
          "Transpiration",
          "Nutrient absorption",
        ],
        answer: "Transpiration",
      },
      {
        id: 6,
        question:
          "Which part of the human brain is responsible for regulating body temperature?",
        options: [
          "Cerebrum",
          "Cerebellum",
          "Medulla oblongata",
          "Hypothalamus",
        ],
        answer: "Hypothalamus",
      },
      {
        id: 7,
        question:
          "What is the process by which green plants make their own food called?",
        options: [
          "Photosynthesis",
          "Respiration",
          "Digestion",
          "Transpiration",
        ],
        answer: "Photosynthesis",
      },
      {
        id: 8,
        question:
          "Which of the following is a function of the human circulatory system?",
        options: [
          "Transport of nutrients",
          "Regulation of body temperature",
          "Elimination of waste",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        id: 9,
        question: "Which of the following is not a sense organ?",
        options: ["Nose", "Heart", "Eyes", "Ears"],
        answer: "Heart",
      },
      {
        id: 10,
        question:
          "What is the process by which organisms exchange gases with their environment?",
        options: ["Respiration", "Digestion", "Photosynthesis", "Circulation"],
        answer: "Respiration",
      },
    ],
    Physics: [
      {
        id: 11,
        question: "What is the SI unit of electric current?",
        options: ["Volt", "Ampere", "Ohm", "Watt"],
        answer: "Ampere",
      },
      {
        id: 12,
        question: "Which law describes the force between two charges?",
        options: [
          "Newton's Law",
          "Coulomb's Law",
          "Ohm's Law",
          "Faraday's Law",
        ],
        answer: "Coulomb's Law",
      },
      {
        id: 13,
        question:
          "Which phenomenon explains why a ball thrown into the air eventually falls back down?",
        options: ["Gravity", "Electromagnetism", "Friction", "Inertia"],
        answer: "Gravity",
      },
      {
        id: 14,
        question: "What is the unit of measurement for force?",
        options: ["Newton", "Joule", "Watt", "Ampere"],
        answer: "Newton",
      },
      {
        id: 15,
        question: "Which of the following is a scalar quantity?",
        options: ["Velocity", "Acceleration", "Force", "Distance"],
        answer: "Distance",
      },
      {
        id: 16,
        question: "What is the SI unit of work and energy?",
        options: ["Joule", "Newton", "Watt", "Coulomb"],
        answer: "Joule",
      },
      {
        id: 17,
        question: "What is the law of conservation of energy?",
        options: [
          "Energy can neither be created nor destroyed",
          "Energy always increases",
          "Energy always decreases",
          "Energy can be created at will",
        ],
        answer: "Energy can neither be created nor destroyed",
      },
      {
        id: 18,
        question: "Which of the following is NOT a type of mechanical wave?",
        options: ["Sound wave", "Light wave", "Water wave", "Earthquake wave"],
        answer: "Light wave",
      },
      {
        id: 19,
        question: "What is the formula for calculating momentum?",
        options: ["m = F/a", "p = mv", "E = mc^2", "F = ma"],
        answer: "p = mv",
      },
      {
        id: 20,
        question: "What is the phenomenon of bending of light called?",
        options: ["Refraction", "Reflection", "Diffraction", "Interference"],
        answer: "Refraction",
      },
    ],
    Chemistry: [
      {
        id: 21,
        question: "Which is the lightest element in the periodic table?",
        options: ["Hydrogen", "Oxygen", "Helium", "Carbon"],
        answer: "Hydrogen",
      },
      {
        id: 22,
        question:
          "Which process involves the conversion of a solid directly into vapor?",
        options: ["Sublimation", "Evaporation", "Condensation", "Fusion"],
        answer: "Sublimation",
      },
      {
        id: 23,
        question: "What is the chemical formula of water?",
        options: ["H2O", "CO2", "O2", "NaCl"],
        answer: "H2O",
      },
      {
        id: 24,
        question:
          "What is the process of removal of water molecules from a substance called?",
        options: ["Hydration", "Hydrolysis", "Dehydration", "Condensation"],
        answer: "Dehydration",
      },
      {
        id: 25,
        question: "What is the pH value of a neutral solution?",
        options: ["6", "7", "8", "9"],
        answer: "7",
      },
      {
        id: 26,
        question: "Which gas is known as laughing gas?",
        options: ["Nitrous oxide", "Oxygen", "Nitrogen", "Carbon dioxide"],
        answer: "Nitrous oxide",
      },
      {
        id: 27,
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Fe", "Cu"],
        answer: "Au",
      },
      {
        id: 28,
        question:
          "What is the process of conversion of a liquid into vapor at the boiling point called?",
        options: ["Sublimation", "Evaporation", "Condensation", "Fusion"],
        answer: "Evaporation",
      },
      {
        id: 29,
        question: "Which gas is responsible for the greenhouse effect?",
        options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Helium"],
        answer: "Carbon dioxide",
      },
      {
        id: 30,
        question:
          "What is the process of conversion of light energy into chemical energy called?",
        options: ["Photosynthesis", "Respiration", "Combustion", "Oxidation"],
        answer: "Photosynthesis",
      },
    ],
  };

  const [justVisited, setJustVisited] = useState({});
  const [selectedSubject, setSelectedSubject] = useState("Biology");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [review, setReview] = useState({});

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === ".") {
        handleQuestionChange(currentQuestionIndex + 1);
      } else if (event.key === ",") {
        handleQuestionChange(currentQuestionIndex - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentQuestionIndex]);

  const handleSubjectChange = (event) => {
    setSelectedSubject(event.target.value);
    setCurrentQuestionIndex(0); // Reset current question index when subject changes
  };

  const [buttonColors, setButtonColors] = useState(
    questions[selectedSubject].reduce((colors, question) => {
      colors[question.id] = "bg-gray-400";
      return colors;
    }, {})
  );

  useEffect(() => {
    const initialButtonColors = questions[selectedSubject].reduce(
      (colors, question) => {
        colors[question.id] = "bg-gray-500";
        return colors;
      },
      {}
    );
    setButtonColors(initialButtonColors);
  }, [selectedSubject]);

  const handleSaveAndNext = (answer) => {
    const updatedAnswers = { ...answers, [currentQuestion.id]: answer };
    const updatedReview = { ...review };
    setAnswers(updatedAnswers);
    updateButtonColor("bg-green-500", updatedAnswers, updatedReview);
    handleQuestionChange(currentQuestionIndex + 1);
  };

  const handleSaveAndMarkForReview = (answer) => {
    const updatedAnswers = { ...answers, [currentQuestion.id]: answer };
    const updatedReview = { ...review, [currentQuestion.id]: true };
    setAnswers(updatedAnswers);
    setReview(updatedReview);
    updateButtonColor("bg-violet-800", updatedAnswers, updatedReview);
    handleQuestionChange(currentQuestionIndex + 1);
  };

  const handleQuestionChange = (questionId) => {
    if (questionId >= questions.length) {
      setCurrentQuestionIndex(0);
    } else if (questionId < 0) {
      setCurrentQuestionIndex(questions.length - 1);
    } else {
      setCurrentQuestionIndex(questionId);
    }
  };

  const updateButtonColor = (color, updatedAnswers, updatedReview) => {
    setButtonColors((prevColors) => ({
      ...prevColors,
      [currentQuestion.id]: color,
    }));
  };

  const handleClear = (questionId) => {
    setAnswers({ ...answers, [questionId]: undefined });
    setReview({ ...review, [questionId]: false });
    updateButtonColor("bg-orange-400");
  };

  const currentQuestion = questions[selectedSubject][currentQuestionIndex];

  return (
    <div className="flex flex-col justify-center my-4">
      <div className=" flex gap-4 justify-around">
        <div className="flex flex-col w-4/6 ">
          <div className="m-4 p-6  w-[50rem] h-[34rem] rounded-md">
            <Question
              question={currentQuestion}
              selectedOption={answers[currentQuestion.id]}
              onSaveAndNext={handleSaveAndNext}
              onClear={handleClear}
              onSaveAndMarkForReview={handleSaveAndMarkForReview}
            />
          </div>
          <div className="flex my-4 mx-6 justify-between items-center">
            <div>
              <button
                className="border-2 border-black px-3 py-1.5 font-bold text-lg rounded-md m-2"
                onClick={() => handleQuestionChange(currentQuestionIndex - 1)}
              >
                &lt;&lt; Previous
              </button>
              <button
                className="border-2 border-black px-3 py-1.5 font-bold text-lg rounded-md m-2"
                onClick={() => handleQuestionChange(currentQuestionIndex + 1)}
              >
                Next &gt;&gt;
              </button>
            </div>
            <button
              className="py-2 w-[10rem] font-bold text-lg font-Outfit text-white bg-[#754ffe] rounded-lg hover:shadow-lg border-2 border-[#754ffe] hover:bg-white hover:text-[#754ffe] transition duration-500 ease-in-out active:translate-y-4"
              onClick={() => console.log(answers, review, justVisited)}
            >
              Submit
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center m-4 flex-wrap gap-6 w-2/6 h-full p-4 overflow-auto">
          <div className="flex justify-center items-center space-x-4 my-4">
            <label className="inline-flex items-center mx-4 border-2 border-black rounded-2xl px-4 py-1.5 transition duration-500 ease-in-out hover:border-blue-700 hover:bg-gray-100">
              <input
                type="radio"
                className="form-radio sr-only text-blue-600 h-5 w-5"
                name="subject"
                value="Biology"
                onChange={handleSubjectChange}
              />
              <span className="ml-2 tracking-wider text-lg hover:text-blue-700 transition duration-500 ease-in-out ">
                Biology
              </span>
            </label>
            <label className="inline-flex items-center mx-4 border-2 border-black rounded-2xl px-4 py-1.5 transition duration-500 ease-in-out hover:border-blue-700 hover:bg-gray-100">
              <input
                type="radio"
                className="form-radio sr-only text-blue-600 h-5 w-5"
                name="subject"
                value="Physics"
                onChange={handleSubjectChange}
              />
              <span className="ml-2 tracking-wider text-lg hover:text-blue-700 transition duration-500 ease-in-out ">
                Physics
              </span>
            </label>
            <label className="inline-flex items-center mx-4 border-2 border-black rounded-2xl px-4 py-1.5 transition duration-500 ease-in-out hover:border-blue-700 hover:bg-gray-100">
              <input
                type="radio"
                className="form-radio sr-only text-blue-600 h-5 w-5"
                name="subject"
                value="Chemistry"
                onChange={handleSubjectChange}
              />
              <span className="ml-2 tracking-wider text-lg hover:text-blue-700 transition duration-500 ease-in-out ">
                Chemistry
              </span>
            </label>
          </div>
          <div className="flex m-4 mx-6 flex-wrap gap-6">
            {questions[selectedSubject].map((question) => (
              <button
                key={question.id}
                onClick={() => handleQuestionChange(question.id - 1)}
                className={`text-white w-[4rem] m-1 h-[4rem] rounded-tr-xl rounded-bl-xl p-4 ${
                  buttonColors[question.id]
                }`}
              >
                {question.id}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exam;
