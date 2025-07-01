import React from 'react'
import './Weather.css'
import search_icon from '../assets/search.png'
import cloudy_rain_sun_icon from '../assets/cloudy-rain-sun.png'
import sun_icon from '../assets/sun.png'
import cloudy_icon from '../assets/cloudy.png'
import rain_icon from '../assets/rain.png'
import snow_icon from '../assets/snow.png'
import storm_icon from '../assets/storm.png'
import wind_icon from '../assets/wind.png'
import temperature_icon from '../assets/temperature.png'
import humidity_icon from '../assets/humidity.png'


const Weather = () => {
  return (
    
       <div className="weather">
            <div className='search-bar'>
                <input type="text" placeholder="Search for a city..." />
                <img src={search_icon} alt="search-icon" className='search-icon'/>
            </div>

            <img src={sun_icon} className='weather-icon'></img>

            <div className='temperature-content'>
                <p className='temperature'>16°c</p> 
                <img src={temperature_icon} className='temperature-icon'></img>
            </div>

            <p className='location'>London</p>

            <div className='weather-data'>
                <div className='col'>
                    <img src = {humidity_icon} className='humidity-icon' alt='humidity-icon'></img>
                    <div>
                        <p>91%</p>
                        <span>Humidity</span>
                    </div>
                </div>

                <div className='col'>
                    <img src={wind_icon} className='wind-speed-icon' alt='wind-speed-icon'></img>
                    <div>
                        <p>36 km/h</p>
                        <span>wind speed</span>
                    </div>
                </div>
            </div>
        </div>
    
  )
}

export default Weather