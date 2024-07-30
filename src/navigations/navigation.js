import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomeScreen from "../screen/home_screen"
import AboutScreen from "../screen/about_screen"
import BlogScreen from "../screen/blog_screen"
import SettingScreen from "../screen/setting_screen"
import InvalidScreen from "../screen/invalid_screen"
import UserScreen from "../screen/user_screen"
import AdminScreen from "../screen/admin_screen"


const NavigationStack=()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomeScreen/>}/>
            <Route path="/registration" element={<AboutScreen/>}/>
            <Route path="/login" element={<BlogScreen/>}/>
            <Route path="/location" element={<SettingScreen/>}/>
            <Route path="/menu" element={<UserScreen/>}/>
            <Route path="*" element={<InvalidScreen/>}/>
            {/* <Route path="user" element={<UserScreen/>}/>
            <Route path="user1" element={<UserScreen/>}/>
            <Route path="user2" element={<UserScreen/>}/>
            <Route path="user/:userid" element={<UserScreen/>}/>
            <Route path="admin" element={<AdminScreen/>}/> */}
        </Routes>

        </BrowserRouter>
    )
}
export default NavigationStack;