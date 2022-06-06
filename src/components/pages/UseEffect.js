import React, { useEffect, useState } from 'react'

export default function UseEffect() {

    const [inc, setInc] = useState(0);
    const [dec, setDec] = useState(20);

    useEffect(() => {
        console.log("I am increment");
    }, [inc])
    
    useEffect(() => {
        console.log("I am decrement");
    }, [dec])
    
    useEffect(() => {
        console.log("I am call at every render and update")
    })
    


    const increment = () => {
        setInc(inc+1)
    }

    const decrement = () => {
        setDec(dec-1)
    }


  return (
    <>
        <h2>{inc}</h2>
        <button onClick={increment}>Increment</button>
        <h2>{dec}</h2>
        <button onClick={decrement}>decrement</button>
    </>
  )
}
