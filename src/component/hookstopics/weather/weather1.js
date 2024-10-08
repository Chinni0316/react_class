import axios from "axios";
import { useEffect } from "react";

const WeatherData=()=>{
    const apiKey = 'YOUR_API_KEY';
    const lat = 'LATITUDE_VALUE';
    const lon = 'LONGITUDE_VALUE';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;


    useEffect(()=>{
        initGeolocation();
    },[])
    function initGeolocation()
    {
       if( navigator.geolocation )
       {
          // Call getCurrentPosition with success and failure callbacks
          navigator.geolocation.getCurrentPosition( success, fail );
       }
       else
       {
          alert("Sorry, your browser does not support geolocation services.");
       }
    }
    function success(position)
    {
        console.log(position.coords.longitude)
        console.log(position.coords.latitude)
        fetchWeather(position.coords.latitude,position.coords.longitude)
       console.log(fetchWeather)
        // document.getElementById('long').value = position.coords.longitude;
        // document.getElementById('lat').value = position.coords.latitude
    }
    function fail()
    {
       // Could not obtain location
       
    }
    const fetchWeather=async(lat,lon)=>{
        try{
        const data=await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
        }
        catch(err){
            console.log("error")
        }
    }
    return(
        <>
        <h3>Weather data</h3>
        <h3>Welcome to </h3>
        </>
    )
}
export default WeatherData;