import React, { useEffect } from 'react'

export const LogComponent = () => {
    useEffect(()=>{
        console.log("After Component Mount")
    },[])
  return (
    <div>
    <hr/>
        <h1>Task Fifth</h1>
    <div>LogComponent</div>
    </div>
  )
}
