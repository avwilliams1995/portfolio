"use client"

import React, {useState, createContext, useContext} from 'react'
import { links } from '@/lib/data';

type SectionName = typeof links[number]["name"];

type CurrentSectionContextType = {
  currentSection: SectionName;
  setCurrentSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
}

export const CurrentSectionContext = createContext<CurrentSectionContextType | null>(null)


export default function CurrentSectionContextProvider({children}: {children: React.ReactNode}) {
  const [currentSection, setCurrentSection] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0); 
  
  return <CurrentSectionContext.Provider value={{
    currentSection,
    setCurrentSection,
    timeOfLastClick,
    setTimeOfLastClick
  }}>{children}</CurrentSectionContext.Provider>
}

export function useCurrentSectionContext() {
  const context = useContext(CurrentSectionContext)
  if (context === null) {
    throw new Error('useCurrentSection must be used within a CurrentSectionContextProvider')
  }
  return context
}