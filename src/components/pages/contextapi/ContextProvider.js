import React, {createContext, useState} from 'react';

export const contextCall = createContext()

export function ContextProvider(props) {

  const [first, setFirst] = useState([
    {
        name: "Rohit",
        Phone: 1234567890,
        Class: "one"
    },
    {
        name: "Chirag",
        Phone: 1234567890,
        Class: "one"
    },
    {
        name: "Neep",
        Phone: 1234567890,
        Class: "one"
    }
])

  return (
    <contextCall.Provider value={first}>
      {props.children}
    </contextCall.Provider>
  )
}
