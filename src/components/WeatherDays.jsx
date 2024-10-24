
import React, { useContext } from 'react';
import WeatherContext from '../providers/weather/WeatherContext';
import { ThemeContext } from '@emotion/react';

const WeatherDays = () => {
  const { weatherDays } = useContext(WeatherContext);
  const {dark} = useContext(ThemeContext)

  return (
    <>
      <div className="weather-container">
        {weatherDays && weatherDays.length > 0 ? (
          weatherDays.map((day, index) => (
            <div key={index} className={dark ? "weather-card " : "weather-card bg-left"}>
              <h3>{new Date(day.dt_txt).toDateString()}</h3>  {/* Displaying date */}
              <p><strong>Temperature:</strong> {day.main.temp} °C</p>  {/* Displaying temperature */}
              <p><strong>Weather:</strong> {day.weather[0].description}</p>  {/* Displaying weather description */}
              <p><strong>Humidity:</strong> {day.main.humidity}%</p>  {/* Displaying humidity */}
              <p><strong>Wind Speed:</strong> {day.wind.speed} m/s</p>  {/* Displaying wind speed */}
            </div>
          ))
        ) : (
          <p>Loading weather data...</p>
        )}
      </div>
    </>
  );
};

export default WeatherDays;
