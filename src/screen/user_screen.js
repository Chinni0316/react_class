import { useEffect, useState } from "react";
import CountComponent from "../component/hookstopics/useEffect/useeffectex1";
import NavBar from "../component/navbar/navbar";
import Card from "../component/recipes/recipes";
import axios from "axios";
import { Link } from "react-router-dom";
import "./user_screen.css"

const UserScreen=()=>{
    const [recipes,setRecipes]=useState([])
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        fetchRecipes();
    },[])
    const fetchRecipes = async () => {
        try {
          const { status, data } = await axios.get("https://dummyjson.com/recipes");
          if (status === 200) {
            setRecipes(data.recipes);
            setLoading(false);
            console.log(data);
          }
        } catch (err) {
          console.error(err);
          setLoading(false);
        }
      };
    return(
        <>
        <NavBar/>
       <center> <h4>Welcome To RecipesScreen</h4>
        <h4>Recipe listing</h4> </center>
        <div className="container">
        {
            
             recipes.map((each)=>{
                const {name,image,rating,id,cuisine}=each;
                 
                return(
                    <div className="Card1">
                    <h3>{name}</h3>
                    <img src={image} width={200} height={200}/>
                    <h3>{rating}</h3>
                    <button className="btn"><Link to={`/recipes/${cuisine}/${id}`}>See more</Link></button>
                 </div>

                )
                
            })
        }
        </div>
        </>
    )
}
export default UserScreen;