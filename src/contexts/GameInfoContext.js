import React, { createContext, useEffect, useState } from "react";
import Question from "../utils/QuestionClass";
import shuffleArray from "../utils/ShuffleArray";

const GameInfoContext = createContext();

const GameInfoContextProvider = ({ children }) => {
  const [step, setstep] = useState(0);
  const [tour, setTour] = useState(1);
  const [question, setQuestion] = useState()

  useEffect(() => {
    const createQuestion = () => {
      const question = new Question(step);
      let answers = question.calculateAnswers();
      const pickedNumbers = question.pickedNumbers;

      if (answers[0] === answers[1]) {
        if (question.changeTime === 0) {
          question.changeNumber = pickedNumbers[1] === 0 ? "numberOne" : "numberTwo"
          answers = question.calculateAnswers();
        }
        if (question.changeTime === 1 && answers[0] === answers[1]) {
          question.changeNumber = pickedNumbers[0] === 0 ? "numberOne" : "numberTwo"
          answers = question.calculateAnswers();
        }
      }

      const shuffledArray = shuffleArray(answers);
      question.answers = [...shuffledArray];
      return question;
    }

    const getQuestion = createQuestion();
    setQuestion(getQuestion);
  }, [step])

  const nextStep = () => {
    setstep((prevStep) => (prevStep + 1 !== 11 ? prevStep + 1 : "end"));
  };

  const defaultContext = {
    step,
    setstep,
    nextStep,
    tour,
    setTour,
    question
  };

  return (
    <GameInfoContext.Provider value={defaultContext}>
      {children}
    </GameInfoContext.Provider>
  );
};

export { GameInfoContext, GameInfoContextProvider };
