import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../component/navbar/navbar"
import { createContext, useContext, useEffect, useState } from "react";
import axios, { Axios } from "axios";
import CustomSpinner from "../component/spinner/custom_spinner";
import { toast } from "react-toastify";
import { FcAddRow } from "react-icons/fc";
import { RecipeContext } from "../navigations/navigation";



const RecipesScreen=()=>{
    const{recipesId}=useParams();
    const {addFavoriteDishHandler}=useContext(RecipeContext)
    
    const [recipes,setRecipes]=useState({})
    const [favoriteDish,setFavoriteDish]=useState([]);
    const navigate=useNavigate()
    
    console.log(recipesId)
    useEffect(()=>{
        fetchRecipes();
    },[recipesId])
    const fetchRecipes=async()=>{
        try{
       const {status,data}=await axios.get(`https://dummyjson.com/recipes/${recipesId}`)
    
    if(status===200){
       setRecipes(data)
       console.log(data)
    
    }
    }catch(err){
      console.log(err)
    }
    }
    const selectHandler=(newDish)=>{
        console.log(newDish,"new dish")
       const recipesExist=favoriteDish.find((each)=>each.id==newDish.id);
       console.log(recipesExist,"recipes")
       const newData=Object.keys(recipes)
        if(!recipesExist){
            setFavoriteDish([...favoriteDish,newDish])
            console.log(recipesExist,"Recipes")
            addFavoriteDishHandler(newDish);
        }
       else{
            toast.error("already exists dish")
            
        }
     }
     const goToFavoriteHandler=()=>{
        navigate("/favorite")
     }
    console.log(favoriteDish,"favorite")
    return(
        <>
       <NavBar/>
        {
            Object.keys(recipes).length>0?(
        <div className="card">
            
            <h3>{recipes.name}</h3>
            <img src={recipes.image} width={400} height={400}/>
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
           
              <button  className="btn1"onClick={ goToFavoriteHandler}>Go to Favorite</button>
             <button className="btn1" onClick={()=>selectHandler(recipes)}>Add to Favorite</button>
             
        </div>
            ):(
            <>
            <CustomSpinner/>
            <h3>Please data is loading..</h3>
            </>
            )
        }
        </>
    )
}
export default RecipesScreen;
