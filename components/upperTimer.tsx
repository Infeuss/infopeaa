"use client"
import React, { useState } from 'react'
import { CountdownCircleTimer, useCountdown } from 'react-countdown-circle-timer';
import { useSafeLinkContext } from './safeLinkContext';

const UpperTimer = () => {
  const {safeLink,setSafeLink} = useSafeLinkContext();
  const time = safeLink.timings[safeLink.currentPage - 1]?.upperTimer ?? 99;
  const [lable,setLable] = useState("Generating Link...");

  return (
    <center className='flex flex-col gap-2 items-center justify-center'>
        <CountdownCircleTimer
            isPlaying
            duration={time}
            size={70}
            colors={['#004777', '#F7B801', '#A30000', '#A30000']}
            colorsTime={[7, 5, 2, 0]}
            onComplete={() => {
                setLable("Scroll Down and Click on Continue");
                setSafeLink({...safeLink,isUpperTimerCompleted : true});
            }}
            >
            {({ remainingTime }) => {
            return <div>{remainingTime}</div>
            }}
        </CountdownCircleTimer>
        <span className='font-semibold text-zinc-700'>{lable}</span>
    </center>
  )
}

export default UpperTimer