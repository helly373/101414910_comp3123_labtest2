import React from "react";

const WeatherDisplay = ({ data }) => {
  const { name, main, weather, wind, visibility, clouds } = data;

  return (
    <div>
      <h2>Weather in {name}</h2>
      {weather && weather[0] && (
        <img
          key={weather[0].icon}
          src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
          alt={weather[0].description || 'Weather Icon'}
        />
      )}
      <p><strong>Temperature:</strong> {main.temp}°C</p>
      <p><strong>Feels Like:</strong> {main.feels_like}°C</p>
      <p><strong>Min Temperature:</strong> {main.temp_min}°C</p>
      <p><strong>Max Temperature:</strong> {main.temp_max}°C</p>
      <p><strong>Humidity:</strong> {main.humidity}%</p>
      <p><strong>Pressure:</strong> {main.pressure} hPa</p>
      <p><strong>Visibility:</strong> {visibility / 1000} km</p>
      <p><strong>Wind Speed:</strong> {wind.speed} m/s</p>
      <p><strong>Wind Direction:</strong> {wind.deg}°</p>
      <p><strong>Cloudiness:</strong> {clouds.all}%</p>
      <p><strong>Description:</strong> {weather[0].description}</p>
      
    </div>
  );
};

export default WeatherDisplay;
