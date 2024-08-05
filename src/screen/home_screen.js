
import NavBar from "../component/navbar/navbar";
import { useContext, useEffect, useState } from "react";
import "./home_screen.css"


import { RecipeContext } from "../navigations/navigation";
import { useNavigate } from "react-router-dom";
import SearchBar from "../component/search_component/search";




const HomeScreen=()=>{
   const {recipe,addFavoriteDishHandler}=useContext(RecipeContext)
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
                <h3>DishName: {each.name}</h3>
                <img src={each.image} width={200} height={200}/>
                <p>Cuisine: {each.cuisine}</p>
                <p>MealType: {each.mealType}</p>
                <h5>Rating: {each.rating}</h5>
                {each.existInFavorite?(
                <button onClick={goToFavoriteHandler} className="btn1">Go to Favorite</button>):(
                <button onClick={()=>addFoodHandler(each)} className="btn1">Add Favorite</button>)}
                </div>
            )
        })}
       </div>
       
        </>
        )
}
export default HomeScreen;