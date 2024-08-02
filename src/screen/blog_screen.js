import CountryApi from "../component/country/countryFetch data";
import ControlledRegistrationForm from "../component/hookstopics/form/controlled form/newform";
import RegistrationFrom from "../component/hookstopics/form/uncontrolled/form2";
import ListItem from "../component/List/ListItems";
import NavBar from "../component/navbar/navbar";

const BlogScreen=()=>{
    return(
        <>
           <NavBar/>
        <h3>Welcome to Country Data</h3>
     {/* <RegistrationFrom/> */}
     <CountryApi></CountryApi>
        </>
    )
}
export default BlogScreen;