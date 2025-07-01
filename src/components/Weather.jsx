import React from 'react'
import './Weather.css'
import search_icon from '../assets/search.png'
const Weather = () => {
  return (
    <div>
       <div className="weather">
            <div className='search-bar'>
                <input type="text" placeholder="Search for a city..." />
                <img src={search_icon} alt="search-icon" className='search-icon'/>
                
            </div>
        </div>
    </div>
  )
}

export default Weather