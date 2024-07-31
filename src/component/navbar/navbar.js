import { Link ,NavLink} from "react-router-dom";
import"./navbar.css"

const NavBar=()=>{
    const LinkStyle={margin:10,textDecoration:"none"}
   
    
    return ( <>
  <nav className="navbar navbar-expand-sm bg-light navbar-light">
    <div className="container-fluid">
      <ul className="navbar-nav">
        <li className="nav-item">
         <NavLink  to={"/"} style={LinkStyle}>Main</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={"/registration"} style={LinkStyle}>Registration</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={"/login"} style={LinkStyle}>Login</NavLink>
        </li>
        <li className="nav-item">
         <NavLink to={"/location"} style={LinkStyle}>Location</NavLink>
        </li>
        <li className="nav-item">
         <NavLink to={"/menu"} style={LinkStyle}>Menu</NavLink>
        </li>
        <li className="nav-item">
         <NavLink to={"/recipes"} style={LinkStyle}>Recipes</NavLink>

        </li>
       

        
        

      </ul>
    </div>
  </nav>

</>)

    
    
}
export default NavBar;