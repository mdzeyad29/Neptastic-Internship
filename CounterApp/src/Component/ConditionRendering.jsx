import React, { useState } from 'react'

export const ConditionRendering = () => {
    const [isLoggedIn ,setisLoggedIn ]=useState(false)
  return (
    <div>
    <hr/>
    <h1>Task Sixth</h1>
    {
        isLoggedIn?"WelCome Back":"Please Login"
    }
    <button onClick={()=>setisLoggedIn(!isLoggedIn)}>{
        !isLoggedIn?"Login":"Logout"
    }</button>
    </div>
  )
}
