import React, {useEffect, useState} from "react";
import "./App.css";
import Weather from './components/Weather';
import Forecast from './components/Forecast';
import { filterForecast } from "./utils";



const id = process.env.REACT_APP_MY_API_ID;


const App = () => {

  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('Prague');
  const [forecast, setForecast] = useState(null);


  const fetchWeather = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${id}`)
    .then((response) => response.json())
    .then((data) => {
      setWeather(data);
    });
  }

  const fetchForecast = () => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${id}`)
    .then((response) => response.json())
    .then(json => {
      setForecast(filterForecast(json.list)); 
    });
  }

  console.log(forecast);

  const handleButtonClick = (e) => {
    setCity(e);
  }

  useEffect(() => {
    fetchWeather(city);
    fetchForecast(city);
    //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [city]
  );

  return (
    <div className="App">
      <div className="container">
        <h1>My Weather App</h1>
        <div className="select">
            <button className="button" onClick={() => handleButtonClick('Prague')}>Prague</button>
            <button className="button" onClick={() => handleButtonClick('Barcelona')}>Barcelona</button>
            <button className="button" onClick={() => handleButtonClick('Sydney')}>Sydney</button>
        </div> 
        <div className="weather">
          {({weather}!==null || {weather}!==undefined) ? <Weather weather={weather}/> : null}
          <div class="weather__forecast" id="predpoved">
          {forecast && forecast.map(forecast =><Forecast forecast={forecast}/>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
