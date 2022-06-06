import React, { useContext } from 'react';
import { contextCall } from './ContextProvider';
import ComponentC from './ComponentC';

export default function ComponentB(props) {

    const context = useContext(contextCall)

  return (
   <>
        <div>ComponentB</div>
        {
            console.log(context)
        }
        {context.map(data=>{
            return(
                <div>{data.Phone}</div>
            )
        })}
        {/* {
            console.log("propes", props)
        }
        {
            props.data.length > 0 ? props.data.map(item=>{
                return(
                    <div>{item.Phone}</div>
                )
            }) : ""
        }
        <ComponentsC data={props}/> */}
   </>
  )
}
