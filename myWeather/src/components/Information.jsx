import React from 'react'
import { Error } from './Error'
import { FaTemperatureHigh } from 'react-icons/fa';
import { RiWindyFill } from 'react-icons/ri'
import { BsFillSunriseFill } from 'react-icons/bs'
import { BsSunsetFill } from 'react-icons/bs'
import { MdOutlineWaterDrop } from 'react-icons/md'
import { TiWeatherCloudy } from 'react-icons/ti'



export const Information = ({response}) => {


  function unixTimestampToTime(unixTimestamp) {
    const date = new Date(unixTimestamp * 1000);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    const time = `${hours}:${minutes}:${seconds}`;
    return time;
  }

  return (
      response && Object.keys(response).length > 0 ?
       <div className='information'>
         <div>
            <label>{response.name}, {response.sys.country}</label>
         </div>
         <div>
            <span><FaTemperatureHigh />  <strong>Temp</strong>: {response.main.temp} {'\u00b0'} <small>C</small> </span>
            <span><MdOutlineWaterDrop/>  <strong>Humidity</strong>: {response.main.humidity} <small>%</small> </span>
            <span><RiWindyFill/>  <strong>Wind</strong>: {response.wind.speed} <small>m/s</small> </span>
            <span><TiWeatherCloudy/>  <strong>Condition</strong>: {response.weather[0].main}</span>
            <span><BsFillSunriseFill/>  <strong>Sunrise</strong>: {unixTimestampToTime(response.sys.sunrise)}</span>
            <span><BsSunsetFill/>  <strong>Sunset</strong>: {unixTimestampToTime(response.sys.sunset)}</span>
         </div>
      </div> 
    : <Error/> 
  )
}
