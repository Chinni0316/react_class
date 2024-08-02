import axios from "axios";
import { useEffect, useState } from "react";

const DogData=()=>{
    const [dog,setDog]=useState([])
    useEffect(()=>{
        fetchDogData();
    },[])
    const fetchDogData=async()=>{
        try{
        const {data,status}=await axios .get("https://dog-api.kinduff.com/api/facts?number=10")
        console.log(data)
    }catch(err){
        console.log("err")
    }

    }
    return(
        <></>
    )
}
export default DogData;