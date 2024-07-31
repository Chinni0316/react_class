import Country_Name from "../component/country/country";
import ControlledRegistrationForm from "../component/hookstopics/form/controlled form/newform";
import RegistrationFrom from "../component/hookstopics/form/uncontrolled/form2";
import NavBar from "../component/navbar/navbar";
import CustomSpinner from "../component/spinner/custom_spinner";

const AboutScreen=()=>{
    return(
        <>
        
        <NavBar/>
        <h3>Welcome to Registration from</h3>
       <ControlledRegistrationForm/>
        
        </>
    )
}
export default AboutScreen;