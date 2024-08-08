import axios from "axios"
import { Component, useEffect, useState } from "react"

const WithProfile=(Component)=>{
    // const [profileData,setProfileData]=useState({})
    // useEffect(()=>{
    //     FetchData();
    //   },[])
    //   const FetchData=async()=>{
    //       try{
    //           const {data}=await axios.get ("https://dummyjson.com/users/1");
    //           console.log(data)
    //           setProfileData(data)
    //       }catch(err){
    //           console.log(err)
  
    //       }
  
    //   }
  
    return()=>{
        // const [profileData,setProfileData]=useState({})
      const  profileData={
            name:"Ashwini",
        }
    // useEffect(()=>{
    //   FetchData();
    // },[])
    // const FetchData=async()=>{
    //     try{
    //         const {data}=await axios.get ("https://dummyjson.com/users/1");
    //         console.log(data)
    //         setProfileData(data)
    //     }catch(err){
    //         console.log(err)

    //     }

    // }

        return <Component data={profileData}/>
    }
}
export default WithProfile;
