import { Link ,NavLink} from "react-router-dom";
import"./navbar.css"
import { useContext } from "react";
import { RecipeContext } from "../../navigations/navigation";

const NavBar=()=>{
    const LinkStyle={margin:150,textDecoration:"none"}

    const {favoriteDish}=useContext(RecipeContext)
   
    
    return ( <>
  <nav className="navbar navbar-expand-sm bg-light navbar-light">
    <div className="container-fluid">
      <ul className="navbar-nav">
        <li className="nav-item">
         <NavLink  to={"/"} style={LinkStyle}>Main</NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink to={"/favorite"} style={LinkStyle}>
          Favorite Recipes {favoriteDish.length}
          </NavLink>
        </li>
        <li className="nav-item">
         <NavLink to={"/recipes"} style={LinkStyle}>Recipes</NavLink>

        </li>
        {/* <li className="nav-item">
         <NavLink to={"/admin"} style={LinkStyle}>Admin</NavLink>

        </li> */}
        <li className="nav-item">
         <NavLink to={"/setting"} style={LinkStyle}>Setting</NavLink>

        </li>
      
       

        
        

      </ul>
    </div>
  </nav>

</>)

    
    
}
export default NavBar;