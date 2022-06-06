import React, { useContext } from 'react';
import { contextCall } from './ContextProvider';

export default function ComponentsC() {

  const context = useContext(contextCall)

  return (
      <>
        <div>ComponentsC</div>
        {
            console.log(context)
        }
        {context.map(data=>{
            return(
                <div>{data.Class}</div>
            )
        })}
      </>
  )
}
