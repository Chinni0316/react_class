import FakeStore from "../component/customhooks/fake_store_api";
import Footer from "../component/footer/footer";
import WithProfile from "../component/Hoc/withProfile";
import DishListing from "../component/memorization/dishListing";
import NavBar from "../component/navbar/navbar";

const AdminScreen=(props)=>{
    const {name}=props.data
    console.log(props)
    return(
        <>
        <NavBar/>
        <h3>Welcome to AdminScreen{name}</h3>
        
        <Footer/>
        </>
    )
}
export default WithProfile(AdminScreen);