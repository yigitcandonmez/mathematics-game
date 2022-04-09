import React from 'react'
import titleNormalizer from '../utils/titleNormalizer'
import { Correct, False } from './Icons'

const InfoData = ({ data }) => {
    return (
        <div className="infoBox-info pad-tb-2">
            {
                Object.entries(data).map(([key, value], i) => {
                    const normalKey = titleNormalizer(key);
                    if (!value?.numberOne) {
                        return (<p className='font-6 pad-tb-2'>{normalKey}: {value}</p>)
                    } else {
                        return ((<div className='question flex align-center'>
                            <p className='font-5'>{value.numberOne} x {value.numberTwo} = {value.correctAnswer}</p>
                            <span className='isCorrect'>
                                {
                                    value?.isCorrect ? <Correct width={27} height={27} viewbox="0 0 35 27" /> : <False width={21} height={26} viewbox="0 0 21 26" />
                                }
                            </span>
                        </div>))
                    }
                })
            }
        </div>
    )
}

export default InfoData