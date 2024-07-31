import { useRef, useState } from "react";

const Uncontrolled=()=>{
    const [err,setErr]=useState("")
    const UserName=useRef()
    const EmailRef=useRef()
    const PasswordRef=useRef()
    const submitHandler=(event)=>{
        event.preventDefault();
        const userNameEntered=UserName.current.value;
        const emailEntered=EmailRef.current.value;
        const passwordEntered=PasswordRef.current.value;
        console.log(passwordEntered,userNameEntered,emailEntered)
        if(userNameEntered.length<15 && passwordEntered .length<15){
            setErr()
            console.log("executes")
       successSubmit()
        }
        else{
            // setErr()
            setErr("place enter less then 15 character And password less then 9..")

        }
    }
     const successSubmit=()=>{
        alert("client validation is success")

     }
    
    return(
        <>
        <form onSubmit={submitHandler} style={{textAlign:"center"}}>
            <h3>Login Form</h3>
            <div>
                <label>UserName :</label>
                <input 
                type="text"
                 placeholder="Enter User Name"
                 ref={UserName}/>
            </div><br></br>
            <div>
                <label>Email Address:</label>
                <input 
                type="email"
                placeholder="Enter User email"
                ref={EmailRef}/>
            </div><br></br>
            <div>
                <label>Password :</label>
                <input 
                type="text"
                placeholder="Enter password"
                ref={PasswordRef}/>
            </div><br></br>
            {err&&<span style={{color:"red"}}>{err}</span>}
            <button type="text">Submit</button>
        </form>
        </>
    )
}
export default Uncontrolled;