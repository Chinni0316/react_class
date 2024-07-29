import { useRef, useState } from "react"

const RegistrationFrom=()=>{
    const [form,setForm]=useState(null)
    const [error,setError]=useState(null)
    const UserName=useRef();
    const Password=useRef();
    const Email=useRef();
    const PhoneNumber=useRef();
const submitHandler=(event)=>{
    event.preventDefault();
    // const user=UserName.current.value;
    // const pass=Password.current.value;
    // const mail=Email.current.value;
    // const phone=PhoneNumber.current.value;
    // console.log(user,pass,mail,phone)
     if(UserName>=15 && Password>=15 && Email>=20 && PhoneNumber>=10){
        alert("successfully submit the form.")
        setForm(null)
        localStorage.setItem("Username",UserName)
        localStorage.setItem("password",Password)
        localStorage.setItem("Email",Email)
        localStorage.setItem("Phone Number",PhoneNumber)
     }
     else{
        setError("place enter the valid values.")

     }
}

    return(
        <>
        <form onSubmit={submitHandler}>
        <h3>Welcome User....</h3>
        <h1>RegistrationFrom</h1>
        
    
        <div>
            <label><b>UserName</b></label>
            <input
            type="text"
            className="form_control"
            placeholder="Enter UserName"
            ref={UserName}/>
        </div>
        <div>
            <label><b>Password</b></label>
            <input 
            type="text"
            className="form_control"
            placeholder="Enter Password"
            ref={Password}/>
        </div>
        <div>
            <label><b>Email Address</b></label>
            <input
            type="text"
            className="form_control"
            placeholder="Enter Email address"
            ref={Email}/>
        </div>
        <div>
            <label><b>PhoneNumber</b></label>
            <input
            type="text"
            className="form-control"
            placeholder="Enter Phone Number"
            ref={PhoneNumber}/>
        </div>
        
        {error&&<span style={{color:"red"}}>{error}</span>}
        <button type="submit">Submit</button>
           

           </form>
        
        </>
    )
}
export default RegistrationFrom;