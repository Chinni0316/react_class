import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./recipes.css"


const RecipesData=()=>{
    // const {recipesId}=useParams
    const [recipes,setRecipes]=useState([])
    const [select,setSelect]=useState({})

    useEffect(()=>{
        fetchRecipes();
    },[])
   
    const fetchRecipes=async()=>{
        const {status,data}=await axios.get("https://dummyjson.com/recipes")
        console.log(data)
        const RecipesData= data.recipes.map((eachRecipes)=>{
            return{id:eachRecipes.id,name:eachRecipes.name}
        })
        console.log(RecipesData)
        setRecipes(RecipesData)

    }
    const selectHandler=(event)=>{
                const selectId=event.target.value
                console.log(event.target.value)
        fetchEachRecipes(selectId);
            }

      const fetchEachRecipes=async(recipesId)=>{
        try{
        const {data}=await axios.get(`https://dummyjson.com/recipes/${recipesId}`)
        setSelect(data)
        console.log(data)

    }
        catch(err){
            // console.log("err")

        }
    }
      
  
    return(
        <div>
        <select onChange={selectHandler}>
            {recipes.map(eachRecipes=>{
               return( <option value={eachRecipes.id}>{eachRecipes.name}</option>)
            })}
        </select>
        {Object.keys(select).length>0 &&(
            <div className="main">
                <h4>ID: {select.id}</h4>
                <h3>DishName: {select.name}</h3>
               <img src={select.image} width={200} height={200}/>
               <p>MealType: {select.mealType}</p>
               <p>Rating: {select.rating}</p>
               <p>Cuisine: {select.cuisine}</p>

                
            </div>
        )}
        </div>
    )
}
export default RecipesData;