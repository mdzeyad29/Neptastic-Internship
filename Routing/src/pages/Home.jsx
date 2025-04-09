import React from 'react'
import { Link } from 'react-router-dom'
export const Home = () => {
  return (
    <div>
    <h2>Welcome to Home Page</h2>
    <Link to="/about">About</Link>
    </div>
  )
}
