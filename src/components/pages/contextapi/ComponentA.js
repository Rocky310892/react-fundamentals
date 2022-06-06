import React, { useState, useContext } from 'react';
import { contextCall } from './ContextProvider';
import ComponentB from './ComponentB'

export default function ComponentA() {

    const context = useContext(contextCall)

    //Create Context
    //Use Context as provider
    //Use Context where we want data

    // const [first, setFirst] = useState([
    //     {
    //         name: "Rohit",
    //         Phone: 1234567890,
    //         Class: "one"
    //     },
    //     {
    //         name: "Chirag",
    //         Phone: 1234567890,
    //         Class: "one"
    //     },
    //     {
    //         name: "Neep",
    //         Phone: 1234567890,
    //         Class: "one"
    //     }
    // ])

  return (
    <>
        <div>ComponentA</div>
        {/* {first.map(data=>{
            return(
                <div>{data.name}</div>
            )
        })}
        <ComponentB data={first}/> */}

        {context.map(data=>{
            return(
                <div>{data.name}</div>
            )
        })}
    </>
  )
}
