
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import "./weather.css"
const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');
  const [error, setError] = useState('');

  const apiKey = '80910612dcf7b8881a64531ad282247c';

  const getWeatherByCity = async (cityName) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
      );
      setWeatherData(response.data);
      setError('');
    } catch (err) {
      setError('City not found invalid city name');
      setWeatherData(null);
    }
  };

  const getWeatherByLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
          );
          console.log(response.data)
          setWeatherData(response.data);
          setError('');
        } catch (err) {
          setError('Unable to retrieve weather data');
          setWeatherData(null);
        }
      });
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  };

  useEffect(() => {
    getWeatherByLocation();
  }, []);

  return (
    <div >
    <div className="container1">
      <h1>Weather App</h1>
      <input
      className="input"
        type="text"
        placeholder="Enter city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      /><br></br>
      <button onClick={() => getWeatherByCity(city)} className="btn2">Get Weather</button>  <br></br>
      <button onClick={getWeatherByLocation} className="btn2">Use Current Location</button>

      {error && <p>{error}</p>}

      {weatherData && (
        <div>
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
        
          <p>Weather: {weatherData.weather[0].description}°C</p>
         <p>Humidity:{weatherData.main.humidity}°F</p>

          <p>Maximum_Temperature: {weatherData.main.temp_max}°C</p>
          <p>Minimum_Temperature: {weatherData.main.temp_min}°C</p>
        </div>
      )}
      </div>
    </div>
  );
};

export default Weather;
