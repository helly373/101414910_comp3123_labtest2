import logo from './logo.svg';
import React, {useState} from 'react';
import getWeatherByCity from './api';
import WeatherDisplay from "./components/WeatherDisplay";
import SearchBar from "./components/SearchBar";
import './App.css';


const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchWeather = async (city) => {
    setLoading(true);
    try {
      const response = await getWeatherByCity(city);
      setWeatherData(response.data);
      setError("");
    } catch (err) {
      setError("City not found. Please try again.");
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="app-container">
    <h1>Weather App</h1>
    <SearchBar onSearch={fetchWeather} />
    {error && <p className="error">{error}</p>}
    {weatherData && <WeatherDisplay data={weatherData} />}
  </div>
  );
};

export default App;
