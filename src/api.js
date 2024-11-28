import axios from "axios";

const BASE_URL = "http://api.openweathermap.org/data/2.5/weather";

export const getWeatherByCity = (city) => {
  const API_KEY = process.env.REACT_APP_API_KEY; 
  const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;
  return axios.get(url);
};

export default getWeatherByCity;
