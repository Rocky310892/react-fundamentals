import React from 'react'
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';
import { ContextProvider } from './ContextProvider';

export default function ComponentMain() {
  return (
    <ContextProvider>
        <div>ComponentMain</div>
        <ComponentA/>
        <ComponentB/>
        <ComponentC/>
    </ContextProvider>
  )
}
