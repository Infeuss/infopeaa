"use client"
import Image from "next/image"
import { useMDXComponent } from "next-contentlayer2/hooks"
import Timer from "./timer"
import UpperTimer from "./upperTimer"
import DownTimer from "./downTimer"
import { useSafeLinkContext } from "./safeLinkContext"
import { memo, useEffect, useMemo } from "react"
const components = {
  Image,
  Timer,
  UpperTimer,
  DownTimer
}

interface MdxProps {
  currentPage? : number,
  safe? : string,
  code: string
}

const SafeUpdate = memo(({code ,currentPage,safe} : MdxProps) => {
  const {safeLink,setSafeLink} = useSafeLinkContext();
  
  useEffect(() => {
    setSafeLink({...safeLink,currentPage : currentPage ?? 1,safeLink : safe ?? "https://www.google.com"});
  }, []);

  return null;
})

export function Mdx({code,currentPage,safe}: MdxProps) {
  const Component = useMDXComponent(code);
  

  return (
    <>
     <SafeUpdate code={code} currentPage={currentPage} safe={safe} />
     <Component components={components} />
    </>
  )
}
