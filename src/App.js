import { useState } from 'react';
import WeatherCard from './components/WeatherCard';
import API_KEY from './Api_Key'
import { getWeather } from './FetchData/fetchApi';
const key = API_KEY ;

// async function getWeather(city, setWeatherObj, setIsLoading) {
//   try {
//     let api=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
//     let res = await fetch(api);
//     let response = await res.json();
//     setWeatherObj(response);
//     setIsLoading(false);
//   } catch(err) {
//     alert(`${err.name} : ${err.message}`)
//   }
// }

function App() { 
  let [weatherObj, setWeatherObj] = useState({});
  let [isLoading, setIsLoading] = useState(true);
  let [searchCity, setSearchCity] = useState('');

  let changeHandler = (e) => {
    setSearchCity(e.target.value);
  }

  let handleClick = async () => {
    await getWeather(searchCity, setWeatherObj, setIsLoading);
  }
  
  return (
    <div>
      <div className='searchClass'>
        <input type='text' name='cityName' placeholder='Enter city' className='searchBar' value={searchCity} onChange={changeHandler}></input>
        <button type='submit' className='submitBtn' onClick={handleClick}>Submit</button>
     </div>
      {!isLoading ? (<WeatherCard weatherData={weatherObj}></WeatherCard>) : null}
    </div>
  );
}

export default App;
