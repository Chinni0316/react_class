import axios from "axios";
import { useEffect, useState } from "react";

import "./recipes.css"


const RecipesData=()=>{

    const [recipes,setRecipes]=useState([]);
    const [select,setSelect]=useState({});
    const [filteredRecipes,setFilteredRecipes]=useState([]);
    const [searchQuery,setSearchQuery]=useState("");

    useEffect(()=>{
        fetchRecipes();
    },[])
   
    const fetchRecipes=async()=>{try{
        const {status,data}=await axios.get("https://dummyjson.com/recipes")
        console.log(data)
        const RecipesData= data.recipes.map((eachRecipes)=>{
            return{id:eachRecipes.id,name:eachRecipes.name}
        })
        console.log(RecipesData)
        setRecipes(RecipesData)
        setFilteredRecipes(RecipesData)
    }catch(err){
        console.log("err",err)
    }


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
    const handlerSearch=(event)=>{
        const query=event.target.value.toLowerCase();
        setSearchQuery(query)
        const filtered=recipes.filter((recipes)=>(
            recipes.name.toLowerCase().includes(query)
        ));
        setFilteredRecipes(filtered)
    }
      
  
    return(
        <div>
        <input 
        type="text"
        placeholder="Search for a recipes..."
        value={searchQuery}
        onChange={handlerSearch}/>
        <select onChange={selectHandler}>
            {filteredRecipes.map(eachRecipes=>{
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