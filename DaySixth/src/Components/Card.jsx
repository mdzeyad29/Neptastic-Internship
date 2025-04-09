import React from 'react'

export const Card = ({title,description}) => {
  return (
    <div>
    <h2>Card</h2>
    <h3>Title is: {title}</h3>
    <p>{description}</p>
    </div>
  )
}
