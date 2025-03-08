import React from 'react'
import { CountdownCircleTimer, useCountdown } from 'react-countdown-circle-timer';
import { useSafeLinkContext } from './safeLinkContext';

const Timer = () => {
  const {safeLink,setSafeLink} = useSafeLinkContext();
  return (
    <center>
       <CountdownCircleTimer
          isPlaying
          duration={15}
          size={100}
          colors={['#004777', '#F7B801', '#A30000', '#A30000']}
          colorsTime={[7, 5, 2, 0]}
          onComplete={() => {
            
          }}
        >
        {({ remainingTime }) => {
          return <div>{remainingTime}</div>
        }}
    </CountdownCircleTimer>
    </center>
  )
}

export default Timer