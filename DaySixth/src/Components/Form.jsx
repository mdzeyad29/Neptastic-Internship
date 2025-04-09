import React, { useState } from 'react'

export const Form = () => {
    const [val,setVal] = useState("");
    const [submitData,setsubmitData] = useState("");
    function handleChange(e){
        setVal(e.target.value);
    }
    function SubmitHandler(e){
        e.preventDefault(); 
        setsubmitData(val)
        alert("Form Submit");
        setVal("");
    }
  return (
    <div>
    <h1>Task Second</h1>
    <form  >
       <h2> Controlled using useState</h2>
       <input type='text' value={val} onChange={handleChange}></input>
       <button onClick={SubmitHandler}>Submit</button>
    </form>
      <h3>{submitData}</h3>
      <hr/>
    </div>
  )
}
