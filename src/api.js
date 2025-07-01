//api for weater app
const API_KEY = '0ca8b02eb16b7b3e0d9eae4b8dfd4792';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const fetchWeatherByCity = async (city) => {
  const response = await fetch(`${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`);
  if (!response.ok) throw new Error('Failed to fetch weather');
  return await response.json();
};