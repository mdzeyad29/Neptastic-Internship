import React from 'react'
import { ChildComponent } from './ChildComponent'
export const ParentComp = ({name,Age}) => {
  return (
    <div>
    <hr/>
    <h1>Task Third</h1>
    <ChildComponent name={name} Age={Age} />
    </div>
  )
}
