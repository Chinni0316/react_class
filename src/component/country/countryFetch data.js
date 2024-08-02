import axios from "axios";
import { useEffect, useState } from "react";

const CountryApi=()=>{
    const [country,setCountry]=useState([])
    const [select,setSelect]=useState({})
    useEffect(()=>{
        FetchCountry();

    },[])
    const FetchCountry=async()=>{
        const {data,status}=await axios.get("https://restcountries.com/v3.1/all")
        console.log(data)
        const countrydata=data.map((eachCountry)=>{
            return{name:eachCountry.name}
        })

    }
    return(
        <>
        <select>
            {country.map((each)=>{
               return( <option>{each.name}</option>)

             } )}
        </select>
        </>
    )
}
export default CountryApi;