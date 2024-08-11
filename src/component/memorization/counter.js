import { useState } from "react";

const Counter1=()=>{
    const [count,setCount]=useState(20);


    const incrementHandler=()=>{
      setCount(count+1)
    }
    const decrementHandler=()=>{
        setCount(count-1)
    }
    const resetHandler=()=>{
        setCount(20)
    }
    return(
        <>
        <h3>Counter </h3>
        <h3>Count:{count}</h3>
        <button className="btn1" onClick={incrementHandler}>+</button>
        <button  className="btn1"onClick={decrementHandler}>-</button>
        <button className="btn1" onClick={resetHandler}>Reset</button>
        </>
    )
}
export default Counter1;