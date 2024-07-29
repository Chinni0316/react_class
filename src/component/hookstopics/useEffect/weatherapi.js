import { clear } from "@testing-library/user-event/dist/clear";
import axios from "axios";
import { useEffect, useState } from "react";
 const getWeatherImage=(weather)=>{
    switch(weather){
        case  "Clear":
            return " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSefI-lLLxyXPiaesV1jQdUyXyb5-YZR4Sgdg&s";
        case "Clouds":
            return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8j4E_El3HB8ltRwvtaxCC7G8zc_aDR_pQew&s";
        case "Rain":
            return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNXdMWyxf0tb0RmCG_vlrY9Jx81QvEvJ6kPw&s";
        case "Snow":
            return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS9qzwaJyzN-IHf43Xk4G2M2R5M-8f-GnsLQ&s";
        case "Thunderstorm":
            return " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyQP4XPddbSiKdI_ls1Kev9sEDzuP1xhnR3A&s";
        default:
            return " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4yzj7oJ0_6fjJnOrRlaTXQ7HEGeAMqR6TrA&s";

    }

 }

const WeatherComponent=()=>{
    const [weather,setWeather]=useState("")
    const [loading,setLoading]=useState(true)
    const [temperature,setTemperature]=useState("")
    useEffect(()=>{
        console.log("UseEffect completed..")
        fetchWeather();

    },[ ])
    

    const fetchWeather=async()=>{
        try{
            const {status,data}=await axios.get("https://freetestapi.com/api/v1/weathers?limit=5");
            if(status===200){
                setWeather(data)
                setLoading(false)
                setTemperature(data)
                getWeatherImage(data)
                console.log(data)

            }
            
                // const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
                // const response = await axios.get("https://freetestapi.com/api/v1/weathers?limit=5");
                // const weatherData = response.data;
                // setWeather(weatherData.weather[0].main);
                // setTemperature(weatherData.main.temp);
                // setBackgroundImage(getWeatherImage(weatherData.weather[0].main));
    
        }catch(err){
            console.log(err)
        }

    }
    return(
        <>
       {/* <div className="weather-container" style={{ backgroundImage }}>
      <h3>Weather in {city}</h3>
      <p>{weather}</p>
      <p>{temperature}°C</p>
      <div>
        <label htmlFor="city">Enter city: </label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div> */}
      {weather.map((each,id)=>{
        return(
            <div key={id}>
            <h3>{each.city}</h3>
            <h3>{each.country}</h3>
            <h3>{each.temperature}</h3>
            <h3>{each.longitude}</h3>
            
            </div> 
        ) 
       })} 

      
        </>
    )
}
export default WeatherComponent;