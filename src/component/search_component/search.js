import { useContext, useState } from "react"
import { RecipeContext } from "../../navigations/navigation";

const SearchBar=()=>{
    const {setSearchQuery}=useContext(RecipeContext);
    const [query,setQuery]=useState("");
      
    const searchHandler=(e)=>{
       setQuery(e.target.value);
       setSearchQuery(e.target.value);
       
    }
    return(
        <input
        type="text"
        value={query}
        placeholder="Search recipes..."
        onChange={searchHandler}/>
    )
}
export default SearchBar;