import axios from "axios";
import { useContext, useEffect, useState } from "react";
// import { CountryContext } from "../../screen/admin_screen";

const SearchBar1=()=>{
    // const {setSearchQuery}=useContext(CountryContext)
    const [query,setQuery]=useState("")

    const searchHandler=(event)=>{
        setQuery(event.target.value)
    }
    useEffect(()=>{
        searchProducts()
    },[])
    const searchProducts=async(searchInput1)=>{
        try{
        const response=await axios.get (`https://restcountries.com/v3.1/search?q=${searchInput1}`)
        console.log(response)
    }catch(err){
        console.log(err)
    }
}
    return(
       <input
       type="text"
       value={query}
       placeholder="Search recipes...."
       onChange={searchHandler}/>
    )
}
export default SearchBar1;