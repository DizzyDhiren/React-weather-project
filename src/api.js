import React from 'react';
import { useState } from 'react';

//api for weater app
const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

// Function to search for weather data by city name



const search = async (city) => {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

   if (data.cod !== 200) {
      console.error("API error:", data.message);
      return null;
    }

    return data;
  } catch (error) {
    console.error("Network error:", error);
    return null;
  }
};

export default search;