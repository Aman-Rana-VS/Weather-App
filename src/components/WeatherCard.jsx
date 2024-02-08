import React from 'react'
import WeatherForecast from './WeatherForecast';
import { ERROR } from '../errors'; 

const WeatherCard = ({weatherData}) => {
  if(Object.keys(ERROR).includes(weatherData.cod))
  {
    return <p className='error'>{ERROR[weatherData.cod]}</p>
  }
  let {temp, temp_min, temp_max} = weatherData.main, desc = weatherData.weather[0].description, {humidity} = weatherData.main;
  let {name} = weatherData, {country} = weatherData.sys;
  let kel = 273.15;
  temp = Math.round(temp - kel);
  temp_max = Math.round(temp_max - kel);
  temp_min = Math.round(temp_min - kel);
  return (
    <>
        <div className="container">
            <div className="app-title">
                <p>Weather App</p>
            </div>
            <div className="notification"></div>
            <div className="weather-container">
                <div className="temperature-value">
                    <p>{temp}°<span>C</span></p>
                </div>
                <div className="temperature-description">
                    <p>{desc}</p>
                    <p>Humidity : {humidity}</p>
                    <p>Max Temp : {temp_max}°<span>C</span></p>
                    <p>Min Temp : {temp_min}°<span>C</span></p>
                </div>
                <div className="location">
                    <p>{name}, {country}</p>
                </div>
            </div>
        </div>
        <h2 className='weatherForecastHeading'>Weather Forecast</h2>
        <WeatherForecast cityName={name} ></WeatherForecast>
    </>

  )
}

export default WeatherCard