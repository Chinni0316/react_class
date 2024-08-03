import { useParams } from "react-router-dom";
import NavBar from "../component/navbar/navbar"
import { useEffect, useState } from "react";
import axios, { Axios } from "axios";
import CustomSpinner from "../component/spinner/custom_spinner";


const RecipesScreen=()=>{
    const{recipesId}=useParams();
    const [recipes,setRecipes]=useState({})
    // console.log(urlUseParam,"urlUseParams")
    console.log(recipesId)
    useEffect(()=>{
        fetchRecipes();
    },[recipesId])
    const fetchRecipes=async()=>{
        try{
       const {status,data}=await axios.get(`https://dummyjson.com/recipes/${recipesId}`)
    //    console.log(res)
    if(status===200){
       setRecipes(data)
       console.log(data)
    
    }
    }
       catch(err){

       }
    }
    return(
        <>
        <NavBar/>
        <h3>Welcome to RecipesScreen </h3>
        {
            Object.keys(recipes).length>0?(
            <div className="card">
            <h3>Data retrived successfully..</h3>
            <h3>DishName: {recipes.name}</h3>
            <img src={recipes.image} width={200} height={200}/>
            <h5>MealType:{recipes.mealType}</h5>
            <ul><b>Ingredients:</b>
            {recipes.ingredients.map((ingredient,index)=>(
                 <li>{ingredient}</li>
             ))}
            </ul>
            <ol><b>Instructions:</b> 
            {recipes.instructions.map((instructions,index)=>(
                 <li>{instructions}</li>
             ))}
            </ol>
            <h3>{recipes.rating}</h3>
            {console.log(recipes)}
            </div>):(
            <>
            
            <CustomSpinner/>
            <h3>please data is loading..</h3>
            </>
            )
        }

        </>
    )
}
export default RecipesScreen;
