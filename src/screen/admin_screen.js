
import { useEffect, useState } from "react";
import Footer from "../component/footer/footer";
import withProfile from "../component/Hoc/withProfile";
import WeatherData from "../component/hookstopics/weather/weather1";
import NavBar from "../component/navbar/navbar";
import ChildComponent from "../component/reactmemo/child";
import ParentComponent from "../component/reactmemo/parent";
import axios from "axios";
import SearchBar1 from "../component/search_component/searchinput";

const AdminScreen=(props)=>{
    // const {name}=props.data
    // console.log(props)
    const [country,setCountry]=useState([]);
    const [search,setSearch]=useState("");
    const [filtered,setFiltered]=useState([]);
    useEffect(()=>{
        const filteredData=country.filter(country=>{
            country.name.common.toLowerCase().includes(search.toLowerCase())
            // console.log(filteredData,"filtered")
        })
        setFiltered(filteredData)
    },[search,country])
    
      
    useEffect(()=>{
        fetchCountry();
    },[])
    const fetchCountry=async()=>{
        try{
            const {data,status}=await axios.get("https://restcountries.com/v3.1/all")
            if(status===200){
                console.log(data)
                setCountry(data)
            }

        }catch(err){
            console.log("err",err)
        }
    }
    const searchHandler=(e)=>{
        setSearch(e.target.value)
    }
    return(
        <>
        <NavBar/>
        {/* <h3>Welcome to AdminScreen{name}</h3>
       {
        Object.keys(props.data).length>0?(
            <h3>Good Morning {props.data.username}</h3>
        ):(
            <h3>Good Morning User</h3>
        )
      }
     
      <ParentComponent/> */}
      {/* <center><input 
      text="text"
      placeholder="Enter country name.."
      value={search}
      onChange={searchHandler}
      

      /></center> */}
      <center><SearchBar1/></center>
      <div className="container">
      {country.map((each)=>{
        return(
            <div key={each.index} className="card">
            <h3>{each.name.official}</h3>
            <p>Region: {each.region}</p>
            <img src={each.flags.png}  height={250}/>
            <p>capital: {each.capital}</p>
            <p>suffixes :{each.idd.
suffixes}</p>
            
            <ul>
            {filtered.map((country) => (
          <li key={country.cca3}>
            <strong>{country.name.common}</strong> - Currency: {Object.keys(country.currencies).map(code => (
              <span key={code}>{country.currencies[code].name} ({code})</span>
            ))}
          </li>
           ))}
      </ul>

            </div>
        )
      })}
      
     



        <Footer/>
        </div>
        </>
    )
}
export default withProfile(AdminScreen);