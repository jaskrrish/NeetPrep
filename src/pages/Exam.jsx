import React, { useState, useEffect } from "react";
import { Question, Modal, Result, Loading } from "../components";
import { RiTimerLine } from "react-icons/ri";
import { Toaster, toast } from "sonner";
import { useNavigate } from "react-router-dom";

const Exam = () => {
  const [questions, setQuestion] = useState([
    {
      unique_id: "",
      question: "",
      answer: "",
      explanation: "",
      topic_name: "",
      difficulty_level: "",
      option_a: "",
      option_b: "",
      option_c: "",
      option_d: "",
      quiz_type: "",
      id: "",
    },
  ]);

  const navigate = useNavigate();

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = "";
      toast.error("If you try to go back, the exam will end.");
      navigate("/exam");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const [isLoading, setIsLoading] = useState(false);
  const authToken = localStorage.getItem("authToken");
  const emailName = localStorage.getItem("emailName");

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${authToken}`);
    myHeaders.append("ngrok-skip-browser-warning", "true");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    setIsLoading(true);

    try {
      fetch(
        "https://prepneet-8b39ec2de718.herokuapp.com/api/auth/fetch-final-paper",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          setQuestion(result);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setIsLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const [selectedSubject, setSelectedSubject] = useState("Biology");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [review, setReview] = useState({});
  const [biologyAnswers, setBiologyAnswers] = useState({});
  const [physicsAnswers, setPhysicsAnswers] = useState({});
  const [chemistryAnswers, setChemistryAnswers] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [result, setResult] = useState({});
  const [resultModal, setResultModal] = useState(false);

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
      setCurrentQuestionIndex(90); // First question of Physics
    } else if (event.target.value === "Chemistry") {
      setCurrentQuestionIndex(135); // First question of Chemistry
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
  const handleResultModal = () => {
    setOpenModal(false);
  };

  let start, end;
  if (selectedSubject === "Biology") {
    start = 1;
    end = 90;
  } else if (selectedSubject === "Physics") {
    start = 91;
    end = 135;
  } else if (selectedSubject === "Chemistry") {
    start = 136;
    end = 180;
  }

  const currentQuestion = questions[currentQuestionIndex];

  const [time, setTime] = useState(3 * 60 * 60); // Initial time in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime === 1) {
          setOpenModal(true);
          clearInterval(timer);
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer); // This will clear the timer when the component unmounts
  }, []);

  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  let finalAnswer = {
    username: emailName,
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    questions.forEach((question) => {
      if (question.id >= 1 && question.id <= 90) {
        finalAnswer[question.id] = biologyAnswers[question.id] || null;
      } else if (question.id >= 91 && question.id <= 135) {
        finalAnswer[question.id] = physicsAnswers[question.id] || null;
      } else if (question.id >= 136 && question.id <= 180) {
        finalAnswer[question.id] = chemistryAnswers[question.id] || null;
      }
    });

    try {
      const response = await fetch(
        "https://prepneet-8b39ec2de718.herokuapp.com/api/auth/check-answers",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(finalAnswer),
        }
      );

      const responseData = await response.json();

      console.log(responseData);
      setResult(responseData);

      if (response.ok) {
        // User registered successfully
        setIsLoading(false);
        toast.success("Submit Successfully!");

        // Redirect to login page
        // You should replace '/login' with your actual login route
      } else {
        setIsLoading(false);
        // User already exists or some other error occurred
        toast.error(responseData.message);
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Error:", error);
      toast.error("An error occurred. Please try again later.");
    }

    setTimeout(() => {
      navigate("/thanks");
    }, 3000);
  };

  const handleModalSubmit = () => {
    setOpenModal((Modal) => !Modal);
  };

  return (
    <div className="flex flex-col justify-center my-4">
      {isLoading ? (
        <div className="flex items-center h-screen justify-center">
          <Loading />
        </div>
      ) : (
        <div>
          <div className="flex gap-4 justify-around">
            <div className="flex flex-col md:w-4/6 sm:w-full ml-[2rem] rounded-lg shadow-xl">
              <div className="flex mt-3 justify-end mr-[2rem]">
                <RiTimerLine size={40} />
                <p className="m-2 text-lg font-semibold tracking-wider">
                  {hours}:{minutes < 10 ? `0${minutes}` : minutes}:
                  {seconds < 10 ? `0${seconds}` : seconds}
                </p>
              </div>
              <div className="m-4 p-6  w-[50rem] h-fit min-h-full rounded-md">
                <Question
                  question={currentQuestion}
                  selectedOption={answers[currentQuestion.id]}
                  onSaveAndNext={handleSaveAndNext}
                  onClear={handleClear}
                  onSaveAndMarkForReview={handleSaveAndMarkForReview}
                />
              </div>
              <div className="flex my-4 mx-6 md:justify-between sm:justify-around items-center">
                <div>
                  <button
                    className="border-2 border-black px-3 py-1.5 font-bold text-lg rounded-md m-2"
                    onClick={() =>
                      handleQuestionChange(currentQuestionIndex - 1)
                    }
                  >
                    &lt;&lt; Previous
                  </button>
                  <button
                    className="border-2 border-black px-3 py-1.5 font-bold text-lg rounded-md m-2"
                    onClick={() =>
                      handleQuestionChange(currentQuestionIndex + 1)
                    }
                  >
                    Next &gt;&gt;
                  </button>
                </div>
                <button
                  className="py-2 w-[10rem] font-bold text-lg font-Outfit text-white bg-[#754ffe] rounded-lg hover:shadow-lg border-2 border-[#754ffe] hover:bg-white hover:text-[#754ffe] transition duration-500 ease-in-out active:translate-y-4"
                  onClick={handleModalSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
            <div className="md:flex flex-col m-4 flex-wrap gap-6 w-2/6 p-4 overflow-auto sm:hidden">
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
                <div className="h-[30rem] overflow-auto">
                  {questions
                    .filter(
                      (question) => question.id >= start && question.id <= end
                    )
                    .map((question) => (
                      <button
                        key={question.id}
                        onClick={() => handleQuestionChange(question.id - 1)}
                        className={`bg-gray-400 text-white font-bold w-[3.5rem] m-1 h-[3.5rem] rounded-tr-xl rounded-bl-xl shadow-sm hover:shadow-xl p-4 ${
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
          <Modal
            openModal={openModal}
            handleSubmit={handleSubmit}
            handleCloseModal={handleCloseModal}
            biology={Object.keys(biologyAnswers).length}
            physics={Object.keys(physicsAnswers).length}
            chemistry={Object.keys(chemistryAnswers).length}
          />
        </div>
      )}
      <Toaster
        expand
        visibleToasts={9}
        position="top-center"
        closeButton
        richColors
      />
    </div>
  );
};

export default Exam;
