import React, { useState, useEffect } from 'react'
import "./App.css"
import { UserInput } from './components/UserInput'
import { Information } from './components/Information'
import { apiCall } from './services/apiCall';
import { Loader } from './components/Loader';


function App() {
  const [response, setResponse] = useState({})
  const [loader, setLoader] = useState(null)

useEffect(() => {
  setLoader(true)
    const fetchData = async () => {
      const result = await apiCall("ahmedabad", "india")
      setResponse(result)
    }
    fetchData()
    setLoader(false)
  }, [])
  
  return loader ? <Loader/> :  <div className="container">
    <h1>Vedant's Forecast</h1>
        <div className='weather'>
          <UserInput setResponse={setResponse}/>
          <Information response={response}/>
        </div>
        {console.log(response)}
     </div>
  
}

export default App
