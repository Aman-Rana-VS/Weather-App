import API_KEY from "../Api_Key";
export async function getForecast(cityName) {
    let api = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&cnt=24&appid=${API_KEY}&units=metric`;
    let res = await fetch(api);
    let response = await res.json();
    let {list} = response;
    let arr = [];
    for(let i=7;i<list.length;i+=8) {
        let {temp} = list[i].main, {dt_txt} = list[i], {description} = list[i].weather[0]; 
        arr.push({temp, dt_txt, description})
    }
    return arr;
}

export async function getWeather(city, setWeatherObj, setIsLoading) {
    try {
      let api=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
      let res = await fetch(api);
      let response = await res.json();
      setWeatherObj(response);
      setIsLoading(false);
    } catch(err) {
      alert(`${err.name} : ${err.message}`)
    }
  }