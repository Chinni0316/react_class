import axios from "axios";
import React, { useEffect, useState } from "react";
import "./country.css"

const CountryApi=()=>{
    const [country,setCountry]=useState([])
    const [select,setSelect]=useState({})
    useEffect(()=>{
        FetchCountry();

    },[])
    const FetchCountry=async()=>{
        const {data,status}=await axios.get("https://restcountries.com/v3.1/all")
        console.log(data)
        setCountry(data)
     }
     const selectHandler=(event)=>{
        const selectIndex=event.target.value;
        console.log(event.target.value)
        FetchCountrydata(selectIndex)
     }
     const FetchCountrydata=async(official)=>{
        try{
            const {data}=await axios.get (`https://restcountries.com/v3.1/name/${official} `)
            setSelect(data[0])
            console.log(data[0])

        }catch(err){
            console.log("err",err)
        }
     }
    return(
        <>
        <select onChange={selectHandler}>
           {country.map(each=>(
            <option value={each.index} key={each.index}>{each.name.official}</option>
           ))}
          
        </select>
        {Object.keys(select).length>0&&(
            <div className="country">
                <h4>{select.name.official}</h4>
                <p>Capital: {select.capital}</p>
                <p>Region: {select.region}</p>                    
                <p>Population: {select.population}</p>
                <p>region: {select.region}</p>
                <p>Status: {select.status}</p>
                <img src={select.flags.png} width={200} height={200}/>
            </div>
        )}
        </>
    )
}
export default CountryApi;
