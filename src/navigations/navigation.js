import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomeScreen from "../screen/home_screen"
import AboutScreen from "../screen/about_screen"
import BlogScreen from "../screen/blog_screen"
import SettingScreen from "../screen/setting_screen"
import InvalidScreen from "../screen/invalid_screen"
import UserScreen from "../screen/user_screen"
import AdminScreen from "../screen/admin_screen"
import MenuScreen from "../screen/menu_screen"
import RecipesScreen from "../screen/recipes_screen"
import axios from "axios"
import { createContext, useEffect, useState } from "react"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchBar from "../component/search_component/search"
import Footer from "../component/footer/footer"

 export const RecipeContext=createContext();
const NavigationStack=()=>{
    const [recipe,setRecipes]=useState([])
    const [favoriteDish,setFavoriteDish]=useState([])
    const [searchQuery,setSearchQuery]=useState("");
    const [filteredRecipes,setFilteredRecipes]=useState([]);
    
    useEffect(()=>{
        fetchRecipes()
    },[])
    useEffect(()=>{
        const results=recipe.filter(recipes=>recipes.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredRecipes(results)
    },[searchQuery,recipe])
    const fetchRecipes=async()=>{
        try{
            const {data,status}=await axios .get("https://dummyjson.com/recipes")
            const newData=data.recipes.map((EachData)=>{
                return {...EachData,existInFavorite:false}
            })
            console.log(newData,"newdata")
            if(status==200){
            console.log(data)
            setRecipes(newData)
        }
        }catch(err){
            console.log(err)
        }
    }
    const addFavoriteDishHandler=(newDish)=>{
        const recipeExit=favoriteDish.find(eachFood=>eachFood.id==newDish.id);
        const newRecipesList=recipe.map((eachRecipes)=>{
            if(eachRecipes.id==newDish.id){
                  return{...eachRecipes,existInFavorite:true}
            } 
            else{
                return eachRecipes
            }
        })
        setRecipes(newRecipesList)
        if(!recipeExit){
        setFavoriteDish([...favoriteDish,newDish])
        toast("Add  to favorites..")
        }
        else{
            toast.error("already exists in favorite food..", {
                position: "top-right"
              });
            // toast("already exists in favorite food..")
            // alert("already exists in favorite food..")
        }
    }
    const removeFromFavorite=(id)=>{
        const newFavoriteList=favoriteDish.filter(eachDish=>eachDish.id!=id);
        const newRecipesList=recipe.map((eachRecipes)=>{
            if(eachRecipes.id==id){
                  return{...eachRecipes,existInFavorite:false}
               
            } 
            else{
                return eachRecipes
                
            }
        })
        setRecipes(newRecipesList)
        setFavoriteDish(newFavoriteList)
        if(!newFavoriteList){
            setFavoriteDish([...favoriteDish,id])
            toast("add fav")
        }else{
            toast.error("Remove favorite.")
        }
        
    }

    return(
        <RecipeContext.Provider value={{
            recipe:recipe,
            favoriteDish:favoriteDish,
            addFavoriteDishHandler:addFavoriteDishHandler,
            removeFromFavorite:removeFromFavorite,
            setSearchQuery:setSearchQuery,
            
        }}>
        <BrowserRouter>
       
        <Routes>
            <Route path="/" element={<HomeScreen/>}/>
            <Route path="registration" element={<AboutScreen/>}/>
            <Route path="favorite" element={<BlogScreen/>}/>
            <Route path="location" element={<SettingScreen/>}/>
            <Route path="menu" element={<MenuScreen/>}/>
            <Route path="*" element={<InvalidScreen/>}/>
            <Route path="recipes" element={<UserScreen/>}/>
       
            <Route path="recipes/:cuisine/:recipesId" element={<RecipesScreen/>}/>
     
            
        </Routes>

        </BrowserRouter>
        <ToastContainer />
        <Footer/>
        </RecipeContext.Provider>
    )
}
export default NavigationStack;