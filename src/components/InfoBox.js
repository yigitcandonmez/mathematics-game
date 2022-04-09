import React from 'react'
import { Link } from 'react-router-dom'
import { UnderLine, Button } from "./Icons"
import InfoData from './InfoData'


const InfoBox = ({ InfoTitle, InfoDataObject, InfoButtonText, lineWidth, lineHeight }) => {
    return (
        <div className="infoBox">
            <div className="infoBox-title">
                <UnderLine InfoTitle={InfoTitle} fontClass={"font-8"} lineWidth={lineWidth} lineHeight={lineHeight} viewBox="0 0 640 10" />
            </div>
            <InfoData data={InfoDataObject} />
            <div className="infoBox-button">
                {
                    InfoTitle === "All Questions" ? "" : <Link to="/game">
                        <Button buttonWidth={447} buttonHeight={139} buttonText={InfoButtonText} viewBox="0 0 447 139" />
                    </Link>
                }
            </div>
        </div>
    )
}

export default InfoBox