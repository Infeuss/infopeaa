"use client"
import React, { useState } from 'react'
import { CountdownCircleTimer, useCountdown } from 'react-countdown-circle-timer';
import { useSafeLinkContext } from './safeLinkContext';
import ReCAPTCHA from 'react-google-recaptcha';

const DownTimer = () => {
  const {safeLink,setSafeLink} = useSafeLinkContext();
  const [data,setData] = useState({isButtonClicked : false,isForNavigation : false});
  const time = safeLink?.timings[safeLink?.currentPage - 1]?.downTimer ?? 99;
  const [lable,setLable] = useState("Checking Virus in Link...");
  const actionLink = safeLink?.pagesUrls[safeLink?.currentPage] ?? "https://www.google.com";
  
  return (
    <>
    {
        (safeLink.isUpperTimerCompleted) && (
            <center className='flex flex-col gap-2 items-center justify-center'>
                {
                    (safeLink.currentPage == safeLink.totalPages) ? <CaptchaContent />
                    : (data.isButtonClicked) ? (
                        <>
                            <CountdownCircleTimer
                                isPlaying
                                duration={time}
                                size={70}
                                colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                                colorsTime={[7, 5, 2, 0]}
                                onComplete={() => {
                                    setData({...data,isForNavigation : true,isButtonClicked : false});
                                }}
                                >
                                {({ remainingTime }) => {
                                return <div>{remainingTime}</div>
                                }}
                            </CountdownCircleTimer>
                            <span className='font-semibold text-zinc-700'>{lable}</span>
                        </>
                    ) : (data.isForNavigation) ? (
                      <form action={actionLink} method="POST">
                          <input type="text" name="safe" hidden value={safeLink.safeLink} required  readOnly/>
                          <input type="number" name="page" hidden value={safeLink?.currentPage + 1} required  readOnly/>
                          <button type="submit" className='bg-blue-500 text-white px-4 py-1 rounded-md no-underline'>Submit</button>
                      </form>
                    ) 
                     : (
                          <a href={"javascript:void(0)"} onClick={() => {
                              setData({...data,isButtonClicked : true});
                          }} className='bg-blue-500 text-white px-4 py-1 rounded-md no-underline'>Continue</a>
                      )
                }
            </center>
        )
    }
    </>
  )
}

const CaptchaContent : React.FC = () => {
  return (
    <form action='/' method='POST'>
      <ReCAPTCHA sitekey='6Lf7v1wqAAAAANX5Yy9pPfKOlZ90s3tdrKqzZewy' />
      <br/>
      <button disabled={false} id='safesub' className='bg-blue-500 text-white px-4 py-1 rounded-md no-underline'>SUBMIT</button>
    </form>
  )
}

export default DownTimer