import { useContext } from "react";
import CountryApi from "../component/country/countryFetch data";
import ControlledRegistrationForm from "../component/hookstopics/form/controlled form/newform";
import RegistrationFrom from "../component/hookstopics/form/uncontrolled/form2";
import ListItem from "../component/List/ListItems";
import NavBar from "../component/navbar/navbar";
import { RecipeContext } from "../navigations/navigation";

const BlogScreen=()=>{
    const {favoriteDish,removeFromFavorite}=useContext(RecipeContext)
     
    const removeHandler=(eachFood)=>{removeFromFavorite(eachFood.id)

    }
    return(
        <>
           <NavBar/>
        <h3>Welcome to Favorite recipes screen </h3>
        {
            favoriteDish.length>0?
            <div className="container">
            {favoriteDish.map(each=>{
                return(
                    <div className="main1">
                    <h3>{each.name}</h3>
                    <img src={each.image} width={200} height={200}/>
                    <p>MealType: {each.mealType}</p>
                    <button onClick={()=>removeHandler(each)} className="btn1">Remove</button>
                    </div>
                )
            })}
            </div>:
            <h3>No dishes found</h3>
        }
    
    
        </>
    )
}
export default BlogScreen;