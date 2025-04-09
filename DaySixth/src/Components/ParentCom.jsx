import React from 'react'
import { ChildCom } from './ChildCom'

export const ParentCom = () => {
    function HandleShowdata(){
        alert("This is Click by Child Componenet")
    }
  return (
    <div>
    <h2>ParentComponent</h2>
    <ChildCom showData={HandleShowdata}/>
    </div>
  )
}
