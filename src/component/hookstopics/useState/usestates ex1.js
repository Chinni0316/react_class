import { useState } from "react";

const UseState_example=()=>{
    const [login,set_login]=useState(false);
    const [count,set_count]=useState(10)
    const login_handler=()=>{
        // set_login((login)=>!login)
        set_login(!login)
    }
    const increment_handler=()=>{
        // set_count(count+1)
        // set_count((count)=>count+1)
        // set_count((count)=>count+1)
        setInterval(()=>{
            set_count((count)=>count+1)

        },1000)
  }

    return(
        <>
        <h2>UseState_example</h2>
        {login?<h3>welcome user</h3>:<h3>place login</h3>}
        <button onClick={login_handler}> click me</button><br></br><br></br>
        <button onClick={increment_handler}>increment_handler: {count}</button>
        </>
    )
};
export default UseState_example;
