import React, { useEffect } from 'react'
import InfoBox from '../components/InfoBox';
import useStorage from '../hooks/useStorage';

const CONSTANT_LOCAL_KEY = "mathematics-game-localData";
const CONSTANT_SESSION_KEY = "mathematics-game-sectionData";

const Final = () => {
    const [finalData, setFinalData] = useStorage("local", CONSTANT_LOCAL_KEY);
    const [finalSessionData, setFinalSessionData] = useStorage("session", CONSTANT_SESSION_KEY);

    const { Total_Point, Total_Questions, Correct_Answers, Questions } = finalSessionData;

    useEffect(() => {
        setFinalData({
            Total_Point: finalData.Total_Point + finalSessionData.Total_Point,
            Correct_Answers: finalData.Correct_Answers + finalSessionData.Correct_Answers,
            Total_Questions: finalData.Total_Questions + finalSessionData.Total_Questions
        })

        // return () => {
        //     setFinalSessionData({
        //         Total_Point: 0,
        //         Correct_Answers: [],
        //         Total_Questions: 0
        //     })
        // }
    }, [])

    return (
        <div className="page page-final flex align-center">
            <div className='final--left'>
                <InfoBox InfoTitle="Final" InfoDataObject={{ Total_Point, Total_Questions, Correct_Answers }} InfoButtonText="Restart" lineWidth={228} lineHeight={8} />
            </div>
            <div className='final--right'>
                <InfoBox InfoTitle="All Questions" InfoDataObject={Questions} lineWidth={350} lineHeight={8} />
            </div>
        </div>
    )
}

export default Final