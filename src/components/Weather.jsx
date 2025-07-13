import React from 'react'
import search from '../api'
import { useState, useEffect, useRef } from 'react'
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
import clouds_icon from '../assets/clouds.png'


const Weather = () => {
  const inputRef = useRef();
  const [weatherData, setWeatherData] = useState(null);

  // ✅ Define the search handler ABOVE useEffect
  const handleSearch = async (city) => {
    try {
      const data = await search(city);
      const icon = data.weather[0].icon || "01d"; // Fallback if no icon
      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.round(data.main.temp),
        location: data.name,
        icon: icon
      });
    } catch (error) {
      console.error("Weather fetch failed:", error);
      alert("City not found. Try again.");
    }
  };

  // ✅ Load default city on mount
  useEffect(() => {
    handleSearch("London");
  }, []);

  const weatherIcons = {
    "01d": sun_icon,
    "01n": cloudy_rain_sun_icon,
    "02d": rain_icon,
    "10d": rain_icon,
    "02n": snow_icon,
    "03d": storm_icon,
    "04n": clouds_icon,
    "04d": clouds_icon,
    "03n": wind_icon
  };


  return (
    
       <div className="weather">
            <div className='search-bar'>
                <input ref={inputRef} type="text" placeholder="Search for a city..." />
                <img src={search_icon} alt="search-icon" className='search-icon' onClick={() => handleSearch(inputRef.current.value)}/>
            </div>

            {weatherData ? (
                <>

            <img src={weatherIcons[weatherData.icon] || sun_icon} className='weather-icon'></img>

            <div className='temperature-content'>
                <p className='temperature'>{weatherData.temperature}°c</p> 
                <img src={temperature_icon} className='temperature-icon'></img>
            </div>

            <p className='location'>{weatherData.location}</p>

            <div className='weather-data'>
                <div className='col'>
                    <img src = {humidity_icon} className='humidity-icon' alt='humidity-icon'></img>
                    <div>
                        <p>{weatherData.humidity}%</p>
                        <span>Humidity</span>
                    </div>
                </div>

                <div className='col'>
                    <img src={wind_icon} className='wind-speed-icon' alt='wind-speed-icon'></img>
                    <div>
                        <p>{weatherData.windSpeed} km/h</p>
                        <span>wind speed</span>
                    </div>
                </div>
            </div>

             </>
    ) : (
      <p>Loading...</p>
    )}
        </div>
    
  )
};

export default Weather