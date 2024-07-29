import { useEffect, useState } from "react"

const Mouse_hover=()=>{
    const[Xposition,setXPosition]=useState(0)
    
    const[Yposition,setYPosition]=useState(0)
    useEffect(()=>{
        window.addEventListener("mousemove",mouseTrack)
        return(
            window.removeEventListener("mousemove",mouseTrack)
        )

    },[])
    const mouseTrack=(event)=>{
        setXPosition(event.clientX)
        setYPosition(event.clientY)

    };
    return(
        <>
        <h3>useEffect examples</h3>
        <h3>current mouse position x axis {Xposition}</h3>
        <h3>current mouse position x axis {Yposition}</h3>
        </>
    )
}
export default Mouse_hover;