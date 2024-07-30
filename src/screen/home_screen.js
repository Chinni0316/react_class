import { Spinner } from "react-bootstrap";
import Country_Name from "../component/country/country";
import NavBar from "../component/navbar/navbar";



const HomeScreen=()=>{
    return(
        <>
        
        <NavBar/>
        <h3>Welcome to User Place wait page is loading..</h3>
        <Spinner></Spinner>
       
      
        
        
        </>
    )
}
export default HomeScreen;