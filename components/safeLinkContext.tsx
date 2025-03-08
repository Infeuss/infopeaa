"use client"
import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react"

export type SafeLinkData = {
  totalPages : number,
  currentPage : number,
  safeLink : string,
  isUpperTimerCompleted : boolean,
  googleCaptchaKey : string,
  pagesUrls : string[],
  timings : {
    upperTimer : number,
    downTimer : number
  }[]
}

interface SafeLinkContextType {
  safeLink: SafeLinkData
  setSafeLink: (link : SafeLinkData) => void
}

const SafeLinkContext = createContext<SafeLinkContextType | undefined>(undefined)

export function SafeLinkContextProvider({ children , initialData}: { children: React.ReactNode, initialData: SafeLinkData }) {
  const [safeLink, setSafeLink] = useState<SafeLinkData>(initialData);

  const handleSetSafeLink = (link : SafeLinkData) => {
    setSafeLink(link);
  }
  
  return (
    <SafeLinkContext.Provider value={{safeLink,setSafeLink : handleSetSafeLink}}>
      {children}
    </SafeLinkContext.Provider>
  )
}

export function useSafeLinkContext() {
  const context = useContext(SafeLinkContext)
  if (!context) {
    throw new Error("useSafeLinkContext must be used within a SafeLinkContextProvider")
  }
  return context
}