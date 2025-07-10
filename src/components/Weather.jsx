import React from 'react'
import search from '../api'
import { useState, useEffect } from 'react'
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

    const [weatherData, setWeatherData] = useState(null);
    const weatherIcons = {
        "01d": sun_icon,
        "01n": cloudy_rain_sun_icon,
        "02d": rain_icon,
        "02n": snow_icon,
        "03d": storm_icon,
        "03n": wind_icon}

    useEffect(() => {
    const fetchWeather = async () => {
      const data = await search("London");
      const icon = data.weather[0].icon || "01d"; // Default to sunny icon if no icon is provided
      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.round(data.main.temp),
        location: data.name,
        icon: icon
      });
    };

    fetchWeather();
  }, []);

  return (
    
       <div className="weather">
            <div className='search-bar'>
                <input type="text" placeholder="Search for a city..." />
                <img src={search_icon} alt="search-icon" className='search-icon'/>
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