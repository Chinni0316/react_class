import { useState } from "react"
import "../../class-component/square.css"

const Square_example=()=>{
    const [square,set_square]=useState([])
     const square_handler=()=>{
        const newSquare=[...square,set_square]
        set_square(newSquare)
     }

    
    return(
        <>
        <h3>Square_example</h3>
        <button onClick={square_handler}>Add square</button>
        {
            square.map((each,index)=>{
                return(
                    <div className={
                        (index+1)%2===0?"square-card-highlight":"square-card-not-highlight"
                    }>
                     <center>{index+1}</center>
                    </div>
                )
            })
        }
        </>
    )
}
export default Square_example;