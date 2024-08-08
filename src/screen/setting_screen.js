import FakeStore from "../component/customhooks/fake_store_api";
import SeasonComponent from "../component/hookstopics/useEffect/useeffect task2";
import NavBar from "../component/navbar/navbar";
import Card from "../component/recipes/recipes";

const SettingScreen=()=>{
    return(
        <>
        <NavBar/>
        <h3>Welcome to SettingScreen</h3>
        <FakeStore/>
        {/* <img src="https://storage.googleapis.com/support-forums-api/attachment/message-127331309-17243804224915650280.JPG" width={"100%"} height={"100%"}/> */}
        
        </>
    )
}
export default SettingScreen;