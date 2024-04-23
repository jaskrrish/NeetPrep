import React, { useState, useEffect } from "react";
import { Question, Modal } from "../components";
import { RiTimerLine } from "react-icons/ri";

const Exam = () => {
  const questions = [
    {
      id: 1,
      question:
        "Which of the following is not a function of the human skeletal system?",
      options: ["Support", "Protection", "Contraction", "Storage of minerals"],
      answer: "Contraction",
    },
    {
      id: 2,
      question: "What is the powerhouse of the cell?",
      options: ["Ribosome", "Nucleus", "Mitochondria", "Endoplasmic reticulum"],
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
      options: ["Cerebrum", "Cerebellum", "Medulla oblongata", "Hypothalamus"],
      answer: "Hypothalamus",
    },
    {
      id: 7,
      question:
        "What is the process by which green plants make their own food called?",
      options: ["Photosynthesis", "Respiration", "Digestion", "Transpiration"],
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
    {
      id: 11,
      question: "What is the SI unit of electric current?",
      options: ["Volt", "Ampere", "Ohm", "Watt"],
      answer: "Ampere",
    },
    {
      id: 12,
      question: "Which law describes the force between two charges?",
      options: ["Newton's Law", "Coulomb's Law", "Ohm's Law", "Faraday's Law"],
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
  ];

  const [selectedSubject, setSelectedSubject] = useState("Biology");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [review, setReview] = useState({});
  const [biologyAnswers, setBiologyAnswers] = useState({});
  const [physicsAnswers, setPhysicsAnswers] = useState({});
  const [chemistryAnswers, setChemistryAnswers] = useState({});
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "." || event.key === ">") {
        handleQuestionChange(currentQuestionIndex + 1);
      } else if (event.key === "," || event.key === "<") {
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
    if (event.target.value === "Biology") {
      setCurrentQuestionIndex(0); // First question of Biology
    } else if (event.target.value === "Physics") {
      setCurrentQuestionIndex(10); // First question of Physics
    } else if (event.target.value === "Chemistry") {
      setCurrentQuestionIndex(20); // First question of Chemistry
    }
  };

  const [buttonColors, setButtonColors] = useState(
    questions.reduce((colors, question) => {
      colors[question.id] = "bg-gray-400";
      return colors;
    }, {})
  );

  useEffect(() => {
    if (selectedSubject === "Biology") {
      setAnswers(biologyAnswers);
    } else if (selectedSubject === "Physics") {
      setAnswers(physicsAnswers);
    } else if (selectedSubject === "Chemistry") {
      setAnswers(chemistryAnswers);
    }
  }, [selectedSubject]);

  const handleSaveAndNext = (answer) => {
    const updatedAnswers = { ...answers, [currentQuestion.id]: answer };
    setAnswers(updatedAnswers);
    if (selectedSubject === "Biology") {
      setBiologyAnswers(updatedAnswers);
    } else if (selectedSubject === "Physics") {
      setPhysicsAnswers(updatedAnswers);
    } else if (selectedSubject === "Chemistry") {
      setChemistryAnswers(updatedAnswers);
    }
    updateButtonColor("bg-green-500", updatedAnswers);
    handleQuestionChange(currentQuestionIndex + 1);
  };

  const handleSaveAndMarkForReview = (answer) => {
    const updatedAnswers = { ...answers, [currentQuestion.id]: answer };
    const updatedReview = { ...review, [currentQuestion.id]: true };
    setAnswers(updatedAnswers);
    setReview(updatedReview);
    if (selectedSubject === "Biology") {
      setBiologyAnswers(updatedAnswers);
    } else if (selectedSubject === "Physics") {
      setPhysicsAnswers(updatedAnswers);
    } else if (selectedSubject === "Chemistry") {
      setChemistryAnswers(updatedAnswers);
    }
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
    updateButtonColor("bg-gray-400");
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  let start, end;
  if (selectedSubject === "Biology") {
    start = 1;
    end = 10;
  } else if (selectedSubject === "Physics") {
    start = 11;
    end = 20;
  } else if (selectedSubject === "Chemistry") {
    start = 21;
    end = 30;
  }

  const currentQuestion = questions[currentQuestionIndex];

  const [time, setTime] = useState(3 * 60 * 60); // Initial time in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  const handleSubmit = () => {
    setOpenModal((openModal) => !openModal);
  };

  return (
    <div className="flex flex-col justify-center my-4">
      <div className=" flex gap-4 justify-around">
        <div className="flex flex-col w-4/6 ml-[2rem] rounded-lg shadow-xl">
          <div className="m-4 p-6  w-[50rem] h-[38rem] rounded-md">
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
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
        <div className="flex flex-col m-4 flex-wrap gap-6 w-2/6 h-full p-4 overflow-auto">
          <div className="flex justify-center items-center my-4 py-1.5 border-[1px] border-black/20 rounded-lg">
            <label
              className={`inline-flex items-center mx-4 cursor-pointer ${
                selectedSubject === "Biology"
                  ? "text-[#754ffe] rounded-lg font-semibold bg-white shadow-md"
                  : ""
              } rounded-2xl mr-3 py-1 px-2 hover:border-blue-700 hover:bg-gray-100`}
            >
              <input
                type="radio"
                className="form-radio sr-only text-blue-600 h-5 w-5"
                name="subject"
                value="Biology"
                onChange={handleSubjectChange}
                checked={selectedSubject === "Biology"}
              />
              <span className="ml-2 tracking-wider text-lg hover:text-blue-700 transition duration-500 ease-in-out ">
                Biology
              </span>
            </label>
            <label
              className={`inline-flex items-center mx-4 cursor-pointer ${
                selectedSubject === "Physics"
                  ? "text-[#754ffe] rounded-lg font-semibold bg-white shadow-md"
                  : ""
              } rounded-2xl mr-3 py-1 px-2 hover:border-blue-700 hover:bg-gray-100`}
            >
              <input
                type="radio"
                className="form-radio sr-only text-blue-600 h-5 w-5"
                name="subject"
                value="Physics"
                onChange={handleSubjectChange}
                checked={selectedSubject === "Physics"}
              />
              <span className="ml-2 tracking-wider text-lg hover:text-blue-700 transition duration-500 ease-in-out ">
                Physics
              </span>
            </label>
            <label
              className={`inline-flex items-center mx-4 cursor-pointer ${
                selectedSubject === "Chemistry"
                  ? "text-[#754ffe] rounded-lg font-semibold bg-white shadow-md"
                  : ""
              } rounded-2xl ml-3 py-1 px-2 hover:border-blue-700 hover:bg-gray-100`}
            >
              <input
                type="radio"
                className="form-radio sr-only text-blue-600 h-5 w-5"
                name="subject"
                value="Chemistry"
                onChange={handleSubjectChange}
                checked={selectedSubject === "Chemistry"}
              />
              <span className="ml-2 tracking-wider text-lg hover:text-blue-700 transition duration-500 ease-in-out ">
                Chemistry
              </span>
            </label>
          </div>
          <div className="flex m-4 mx-[2rem] flex-wrap gap-6 peer">
            {questions
              .filter((question) => question.id >= start && question.id <= end)
              .map((question) => (
                <button
                  key={question.id}
                  onClick={() => handleQuestionChange(question.id - 1)}
                  className={`text-white font-bold w-[3.5rem] m-1 h-[3.5rem] rounded-tr-xl rounded-bl-xl shadow-sm hover:shadow-xl p-4 ${
                    buttonColors[question.id]
                  }`}
                >
                  {question.id}
                </button>
              ))}
          </div>
          <div className="flex mt-[4rem] ml-[2.5rem]">
            <RiTimerLine size={40} />
            <p className="m-2 text-lg font-semibold tracking-wider">
              {hours}:{minutes < 10 ? `0${minutes}` : minutes}:
              {seconds < 10 ? `0${seconds}` : seconds}
            </p>
          </div>
        </div>
      </div>
      <Modal
        openModal={openModal}
        handleCloseModal={handleCloseModal}
        biology={Object.keys(biologyAnswers).length}
        physics={Object.keys(physicsAnswers).length}
        chemistry={Object.keys(chemistryAnswers).length}
      />
    </div>
  );
};

export default Exam;
