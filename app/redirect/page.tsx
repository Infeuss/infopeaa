'use client'
import React, { useEffect, useRef } from 'react'

export const runtime = "edge";

const Page = () => {
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (formRef.current) {
        //formRef.current.submit()
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <center className='flex flex-col gap-2 items-center justify-center h-screen w-screen'>
      <p>Redirecting...</p>
      <form ref={formRef} action="/posts/deploying-next-apps" method="POST">
        <input type="text" name="safe" value="https://www.google.com" required readOnly  hidden/>
        <input type="number" name="page" value={1} required readOnly hidden/>
        <button type="submit">Submit</button>
      </form>
    </center>
  )
}

export const fetchCache = 'force-no-store';

export default Page