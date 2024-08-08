
import NavBar from "../component/navbar/navbar";
import { useContext, useEffect, useState } from "react";
import "./home_screen.css"
import { Link } from "react-router-dom";

import { RecipeContext } from "../navigations/navigation";
import { useNavigate } from "react-router-dom";
import SearchBar from "../component/search_component/search";
import Footer from "../component/footer/footer";




const HomeScreen=()=>{
   const {recipe,addFavoriteDishHandler,}=useContext(RecipeContext)
   console.log(recipe,"recipeList")
   const navigate=useNavigate()

   const addFoodHandler=(eachFood)=>{
    addFavoriteDishHandler(eachFood)
    }
    
    const goToFavoriteHandler=()=>{
        navigate("favorite")
    }
    
   
   
    
    return(
        <>
        <NavBar/>
        
        <center><SearchBar/></center>
        <div className="container">
        {recipe&&recipe.length>0&&
        recipe.map((each)=>{
            return(
                <div className="main1" key={each.id}>
                    {console.log(each.id,"id")}
                <h3> {each.name}</h3>
                <img src={each.image} width={300} height={300}/>
                <p className="style1"><b>Cuisine:</b> {each.cuisine}</p>
                <p className="style1"><b>MealType: </b>{each.mealType}</p>
              
                <h5>Rating: {each.rating}</h5>
                {each.existInFavorite?(
                <button onClick={goToFavoriteHandler} className="btn1">Go to Favorite</button>):(
                <><button onClick={()=>addFoodHandler(each)} className="btn1">Add Favorite</button><br></br>
                <button className="btn"w7><Link to={`/recipes/${each.cuisine}/${each.id}`}>See more</Link></button>
                </>)}
                </div>
            )
        })}
       </div>
       <Footer/>
       
        </>
        )
}
export default HomeScreen;