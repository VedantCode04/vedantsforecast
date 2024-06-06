import React from 'react'
import {  useState} from "react";
import { apiCall } from '../services/apiCall';


export const UserInput = ({setResponse}) => {
  const [data, setData] = useState({city: "", country: ""})

  const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }

  const getWeatherData = async ()=> {
    let result = await apiCall(data.city)
    setResponse(result)
  }

  const enterKey = (e) => {
    if (e.key == 'Enter') {
      getWeatherData()
    }
  }

  return (
    <div className='userInput'>
          <input type="text" placeholder='city' name='city' onChange={(e)=> handleChange(e)} onKeyPress={enterKey}/>
        <span className="material-symbols-outlined" onClick={()=>getWeatherData()}>query_stats</span>
    </div>
  )
}
