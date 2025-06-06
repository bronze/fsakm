"use client"

import {createContext, useEffect} from "react"
import {init, track} from "@amplitude/analytics-browser"

const AMPLITUDE_API_KEY = process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY

export const AmplitudeContext = createContext({})

const AmplitudeContextProvider = ({children}) => {
  useEffect(() => {
    init(AMPLITUDE_API_KEY, undefined, {
      defaultTracking: {
        sessions: true,
      },
    })
  }, [])

  //We are going to continue with this context setup in a moment...
  // ...AmplitudeContextProvider previous setup
  const trackAmplitudeEvent = (eventName, eventProperties) => {
    track(eventName, eventProperties)
  }

  const value = {trackAmplitudeEvent}

  return (
    <AmplitudeContext.Provider value={value}>
      {children}
    </AmplitudeContext.Provider>
  )
}

export default AmplitudeContextProvider
