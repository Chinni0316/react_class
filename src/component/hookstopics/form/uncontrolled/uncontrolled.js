import { useRef, useState } from "react";

const Uncontrolled=()=>{
    const [err,setErr]=useState()
    const UserName=useRef()
    const EmailRef=useRef()
    const PasswordRef=useRef()
    const submitHandler=()=>{
        const userNameEntered=UserName.current.value;
        const emailEntered=EmailRef.current.value;
        const passwordEntered=PasswordRef.current.value;
        console.log(passwordEntered,userNameEntered,emailEntered)
        if(userNameEntered>15 && passwordEntered>9){
            setErr(null)
       successSubmit()
        }
        else{
            setErr("place enter less then 15 character And password less then 9..")

        }
    }
     const successSubmit=()=>{
        alert("client validation is success")

     }
    
    return(
        <>
        <form onSubmit={submitHandler}>
            <div>
                <label>UserName</label>
                <input 
                type="text"
                 placeholder="Enter User Name"
                 ref={UserName}/>
            </div>
            <div>
                <label>Email Address</label>
                <input 
                type="email"
                placeholder="Enter User email"
                ref={EmailRef}/>
            </div>
            <div>
                <label>Password</label>
                <input 
                type="text"
                placeholder="Enter password"
                ref={PasswordRef}/>
            </div>
            {err&&<span style={{color:"red"}}>{err}</span>}
            <button type="submit">Submit</button>
        </form>
        </>
    )
}
export default Uncontrolled;