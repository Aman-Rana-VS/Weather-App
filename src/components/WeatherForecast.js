import React, { useEffect, useState } from 'react'
import API_KEY from '../Api_Key';
import { getForecast } from '../FetchData/fetchApi';
const WeatherForecast = ({cityName}) => {

  let [forecastList, setForecastList] = useState([]);

  useEffect(() => {
    getForecast(cityName).then(result => setForecastList(result))
  }, [])
  
  return (
    <div className='forecastContainer'>
        {forecastList.map(curr => {
            return ( 
                <div className='forecastItem'>
                    <p> Temp : {curr.temp}°<span>C</span> </p>
                    <p> Desc : {curr.description} </p>
                    <p> Date : {curr.dt_txt.substr(0, 10)} </p>
                </div>
            )
        })}
    </div>
  )
}

export default WeatherForecast;