//api for weater app
const API_KEY = '0ca8b02eb16b7b3e0d9eae4b8dfd4792';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';



const search = async (city) => {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
};

export default search;