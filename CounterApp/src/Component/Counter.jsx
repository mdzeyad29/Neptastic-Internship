import React, { useState } from 'react'

export const Counter = () => {
    const [count,setCount]= useState(0);
    function Increased(){
        setCount(count+1);
    }
    function decreased(){
        setCount(count-1);
    }
    function Clear(){
        setCount(0);
    }
  return (
    <div>
    <hr></hr>
    <h1>Task Fourth</h1>
      <h2>Counter App</h2>
      <div>
        <button onClick={Increased}>+</button>
        <h3>{count}</h3>
        <button onClick={decreased}>-</button>

        <button onClick={Clear}>Clear</button>
        
      </div>
    </div>
  )
}
