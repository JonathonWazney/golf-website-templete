import React from 'react'
import Navbar from './navbar'
import Weather from './weather'
import "./events.css"

const Events = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Weather></Weather>
       <div className='eventcontainer'>
        <h1>events</h1>
        </div> 
    </div>
  )
}

export default Events