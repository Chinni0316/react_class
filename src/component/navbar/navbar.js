import { Link ,NavLink} from "react-router-dom";
import"./navbar.css"

const NavBar=()=>{
    const LinkStyle={margin:25,textDecoration:"none"}
   
    
    return ( <>
  <nav className="navbar navbar-expand-sm bg-light navbar-light">
    <div className="container-fluid">
      <ul className="navbar-nav">
        <li className="nav-item">
         <NavLink  to={"/"} style={LinkStyle}>Main</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={"/about"} style={LinkStyle}>About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={"/blog"} style={LinkStyle}>Blog</NavLink>
        </li>
        <li className="nav-item">
         <NavLink to={"/setting"} style={LinkStyle}>Setting</NavLink>
        </li>

      </ul>
    </div>
  </nav>

</>)

    
    
}
export default NavBar;