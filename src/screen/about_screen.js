import Country_Name from "../component/country/country";
import Dictionary from "../component/dictionary/dictonary";
import DogData from "../component/dogs_api/dog_api";
import ControlledRegistrationForm from "../component/hookstopics/form/controlled form/newform";
import RegistrationFrom from "../component/hookstopics/form/uncontrolled/form2";
import NavBar from "../component/navbar/navbar";
import CustomSpinner from "../component/spinner/custom_spinner";

const AboutScreen=()=>{
    return(
        <>
    
        <NavBar/>
         <br></br>
         <center><h3>RegistrationFrom</h3></center>
        <ControlledRegistrationForm/>
       
        
        </>
    )
}
export default AboutScreen;