import React from "react";
import './style.css';
import { getDayfromUnix } from '../../utils';

const Forecast = (props) => {

return (

  <div class="forecast">
    <div class="forecast__day">{props.forecast && getDayfromUnix(props.forecast.dt)}</div>
    <div class="forecast__icon">
      {<img src={`https://openweathermap.org/img/wn/${props.forecast.weather[0].icon}@2x.png`}
        style={{ height: "100%" }}
        alt="current weather icon"
      /> }
    </div>
    <div class="forecast__temp">{props.forecast && Math.round(props.forecast.main.temp)} °C</div>
  </div>
)
};

export default Forecast;

