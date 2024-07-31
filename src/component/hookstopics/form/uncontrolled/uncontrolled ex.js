import { useRef, useState } from "react"

const UncontrolledFromEx=()=>{
    const EmailRef=useRef();
    const passwordRef=useRef();
    const [err,setErr]=useState(null)
    const [userdata,setUserData]=useState({})
    const submitHandler=(event)=>{
        event.preventDefault();
        const emailEntered=EmailRef.current.value
        const passwordEntered=passwordRef.current.value
        console.log(emailEntered,passwordEntered,"user details.")
        if(emailEntered.length<15 && passwordEntered.length<15){
            setErr(null);
            successSubmit(emailEntered,passwordEntered)
        }
        else{
            setErr("please entered <15 characters for email and password")
        }
        
    }
    // const successSubmit=(username,password)=>{
    //     fetch("https://dummyjson.com/auth/login",{
    //         method:"POST",
    //         headers:{"Content-Type":"application/json"},
    //         body:JSON.stringify({
    //             // username:"emilys",
    //             // password:"emilyspass",
    //             username:username,
    //             password:password,
    //          })
    //     })
    //     .then((res)=>res.json())
    //     .then(console.log);

    // }

    const successSubmit=async(username,password)=>{
        try{
            const response=await fetch("https://dummyjson.com/auth/login",{
             method:"POST",headers:{"Content-Type":"application/json"},
             body:JSON.stringify({
                username,
                password,
             })
            });
            const finalResponse=await response.json();
            if(finalResponse.message){
                alert(finalResponse.message)
            }
            else{
                console.log(finalResponse,"final response")
                setUserData(finalResponse)
            }
        }
        catch(err){
            console.log("error")
        }

    }
    return(
       <>
       {
        Object.keys(userdata).length>0 ?
        <>
        <h3> ID : {userdata.id}</h3>
        <h3>Welcome User: {userdata.firstName}</h3>
        <h4> LastName :{userdata.lastName}</h4>
        <h4> Gender: {userdata.gender}</h4>
        <img src={userdata.image} width={200} height={200}/>
        <h4>UserEmail:{userdata.email}</h4>
        

        </>
        :
        <form onSubmit={submitHandler}>
        <div>
            <label>UserName</label>
            <input type="text"
            className="form_control"
            id="user"
            placeholder="Enter UserName"
            name="username"
            ref={EmailRef}/>
        </div>
        <div>
            <label>Password</label>
            <input 
            type="password"
            className="form_control"
            id="pwd"
            placeholder="Enter password"
            name="pswd"
            ref={passwordRef}/>
        </div>
        {err&& <span style={{color:"red"}}>{err}</span>}
        <button type="submit">Submit</button>
    </form>
       }
       </>
    )

}
export default UncontrolledFromEx;