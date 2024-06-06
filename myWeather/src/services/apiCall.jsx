import axios from 'axios'
const API_URL = "https://api.openweathermap.org/data/2.5/weather"
const API_KEY = "445af7afc96b279ede59e431910bdff3"
export const apiCall = async (city, country) => {
  const url = `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
  try {
    let response = await axios.get(url)
    return response.data;
  } catch (error) {
    console.log(error)
  }
}
