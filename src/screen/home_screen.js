import { Spinner } from "react-bootstrap";
import Country_Name from "../component/country/country";
import NavBar from "../component/navbar/navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import RecipesData from "../component/recipes_find/recipes_fetch";



const HomeScreen=()=>{
    return(
        <>
        <NavBar/>
        <h3>Welcome to User Place wait page is loading..</h3>
        {/* <Spinner></Spinner> */}
        <RecipesData></RecipesData>
        </>
        )
}
export default HomeScreen;