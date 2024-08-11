import React from "react"

const ChildComponent=()=>{
    console.log("child component..")
    const childHandler=()=>{
        console.log("child Handlers..")
    }
    return(
        <>
        ChildComponent
        
        </>
    )
}
export  default React.memo(ChildComponent);