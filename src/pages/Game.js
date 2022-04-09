import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SmallButton, GameBoard } from "../components/Icons";
import { GameInfoContext } from "../contexts/GameInfoContext";
import useStorage from "../hooks/useStorage";

const CONSTANT_SESSION_KEY = "mathematics-game-sectionData";

const Game = () => {
  const { step, setstep, tour, setTour, nextStep, question } = useContext(GameInfoContext);
  const [gameData, setGameData] = useStorage("session", CONSTANT_SESSION_KEY, {});
  const [backgroundColor, setBackgroundColor] = useState("default");
  const [currentAnswer, setCurrentAnswer] = useState();
  const [currentInfo, setCurrentInfo] = useState({
    Total_Point: 0,
    Correct_Answers: 0,
    Total_Questions: 1,
  })

  console.log(gameData)

  let navigate = useNavigate();

  const handleClick = (e) => {
    setTimeout(() => {
      nextStep();
    }, 1000)
    setCurrentAnswer(Number(e.target.innerText));
    const backgroundClass = question.correctAnswer === Number(e.target.innerText) ? "green" : "red";
    setBackgroundColor(backgroundClass);
  }

  useEffect(() => {
    if (step + 1 === 11) {
      navigate("/final");
      setTour((prevTour) => prevTour + 1);
      setstep(0);
    }
    setCurrentAnswer()
    setBackgroundColor("default")
  }, [step]);

  useEffect(() => {
    if (typeof currentAnswer !== "undefined" && currentAnswer === question?.correctAnswer) {
      setCurrentInfo((prevInfo) => {
        return {
          Total_Point: prevInfo.Total_Point + question?.score,
          Correct_Answers: prevInfo.Correct_Answers + 1,
          Total_Questions: prevInfo.Total_Questions + 1 !== 12 ? prevInfo.Total_Questions + 1 : prevInfo.Total_Questions
        }
      })
    } else if (typeof currentAnswer !== "undefined" && currentAnswer !== question?.correctAnswer) {
      setCurrentInfo((prevInfo) => {
        return {
          ...prevInfo,
          Total_Questions: prevInfo.Total_Questions + 1 !== 12 ? prevInfo.Total_Questions + 1 : prevInfo.Total_Questions
        }
      })
    }
    setGameData((prevData) => {
      return {
        ...currentInfo,
        Questions: {
          ...prevData.Questions,
          [step]: {
            numberOne: question?.numberOne,
            numberTwo: question?.numberTwo,
            isCorrect: currentAnswer === question?.correctAnswer && typeof currentAnswer !== "undefined" ? true : false,
            correctAnswer: question?.correctAnswer
          }
        }
      }
    })
  }, [currentAnswer])


  return (
    <div className={`page page-game flex justify-around align-center ${backgroundColor}`}>
      <div className="page-game-left">
        <GameBoard numberOne={question?.numberOne} numberTwo={question?.numberTwo} />
      </div>
      <div className="page-game-right">
        <div className="page-game-info flex justify-center">
          <h2>Total Point: {currentInfo.Total_Point}</h2>
          <h2>Tour: {tour}</h2>
          <h2>Questions: {currentInfo.Correct_Answers}/{currentInfo.Total_Questions - 1}</h2>
        </div>
        <div className="page-game-answers flex justify-center align-center">
          {
            question?.answers?.map((e, idx) => {
              let fill;
              if (typeof currentAnswer !== "undefined") { fill = e === question.correctAnswer ? "green" : "#2D2D2D" } else { fill = "white" }
              return <SmallButton id={idx} buttonText={e} buttonWidth={203} buttonHeight={178} viewBox="0 0 203 178" handleClick={handleClick} fill={fill} />
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Game;


