import { useState } from "react"
import ChildComponent from "./child"

const ParentComponent=()=>{
    const [darkTheme,darkSetTheme]=useState(false)
    console.log("parent component...renderingg")
    const parentHandler=()=>{
        console.log("parentHandler..")
        darkSetTheme(!darkTheme)
    }
    return(
        <>
        ParentComponent
        <button onClick={parentHandler}>ParentComponent</button>
        <ChildComponent/>
        </>
    )
}
export default ParentComponent;