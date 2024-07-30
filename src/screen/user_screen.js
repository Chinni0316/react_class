import CountComponent from "../component/hookstopics/useEffect/useeffectex1";
import NavBar from "../component/navbar/navbar";
import Card from "../component/recipes/recipes";

const UserScreen=()=>{
    return(
        <>
        <NavBar/>
        <h4>Welcome To Menu ...</h4>
        <Card/>
        <CountComponent/>
        </>
    )
}
export default UserScreen;