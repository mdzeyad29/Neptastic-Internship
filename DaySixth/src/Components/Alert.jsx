import React from 'react'

export const Alert = () => {
    function ShowAlert(){
     alert("Button Click");
    }
  return (
    <div>
    <h1>Task First</h1>
    <button onClick={ShowAlert}>Click</button>
    <hr/>
    </div>
  )
}
