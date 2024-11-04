import { useEffect, useState } from "react";
import FakeStore from "../component/customhooks/fake_store_api";
import SeasonComponent from "../component/hookstopics/useEffect/useeffect task2";
import Counter1 from "../component/memorization/counter";
import DishListing from "../component/memorization/dishListing";
import ExpensiveCalculation from "../component/memorization/expensivecalculation";
import NavBar from "../component/navbar/navbar";
import ChildComponent from "../component/reactmemo/child";
import ParentComponent from "../component/reactmemo/parent";
import Card from "../component/recipes/recipes";
import axios from "axios";
import WeatherComponent from "../component/weatherData/weatherdata";
import CardComponent from "../component/cards/cards";


const SettingScreen=()=>{
  
    return(
        <div className="container">
       
        <NavBar/>
      
        <WeatherComponent/>
       

       
        
        {/* <FakeStore/>
        <DishListing/>
        <ExpensiveCalculation/> 
        <img src="https://storage.googleapis.com/support-forums-api/attachment/message-127331309-17243804224915650280.JPG" width={"100%"} height={"100%"}/> 
     <Counter1/> */}
       
        </div>
    )
}

export default SettingScreen;