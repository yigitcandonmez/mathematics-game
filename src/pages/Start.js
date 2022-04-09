import React from "react";
import InfoBox from "../components/InfoBox";
import useStorage from "../hooks/useStorage";

const CONSTANT_LOCAL_KEY = "mathematics-game-localData"

const Start = () => {
  const [dataName] = useStorage("local", CONSTANT_LOCAL_KEY, {
    Total_Point: 0,
    Correct_Answers: 0,
    Total_Questions: 0
  });

  return (
    <div className="page page-start flex justify-center align-center">
      <InfoBox InfoTitle="Mathematics Game" InfoDataObject={dataName} InfoButtonText="Start" lineWidth={640} lineHeight={10} />
    </div>
  )
};

export default Start;
