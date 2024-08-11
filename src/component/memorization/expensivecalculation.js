import { useState } from "react";

const ExpensiveCalculation=()=>{
    const [count,setCount]=useState(10);
    // const [todo,setTodo]=useState([]);

    const incrementHandler=()=>{
        console.log("incrementHandler")
        setCount(count+1)
    }
    const decrementHandler=()=>{
        
        console.log("decrement handler")
        setCount(count-1)
    }
    const resetHandler=()=>{
        setCount(10)
    }

    return(
        <>
        <h3>ExpensiveCalculation</h3>
        Count:{count}
        <button  className="btn1" onClick={incrementHandler}>+</button>
        <button  className="btn1"onClick={decrementHandler}>-</button>
        <button  className="btn"onClick={resetHandler}>Reset</button>
        </>
    )
}
export default ExpensiveCalculation;