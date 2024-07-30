

import {  useState } from "react"

const From_ListComponent=()=>{
    const [userName,setUserName]=useState("")
    const [password,setPassword]=useState("")
    const [userNameErr,SetUserNameError]=useState(false)
    const [passwordErr,setPasswordErr]=useState(false)
    const [userdata,setUserData]=useState({})
    const [list,setList]=useState([])
   
    
    const submitHandler=(event)=>{
        event.preventDefault();
        if(!userNameErr&&!passwordErr){
          console.log("success") 
          successSubmit(userName,password) 
        }
    }
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
                const totalname=finalResponse.firstName+finalResponse.lastName
                setList([...list,totalname])
                setUserData(finalResponse)
            }
        }
        catch(err){
            console.log("error")
        }
    }
    const userNameHandlers=(event)=>{
        const userNameEntered=event.target.value;
        setUserName(userNameEntered)
        console.log(userNameEntered ,"userName entering.")
        if(userNameEntered.length>15){
            SetUserNameError(true)
        }else{
            SetUserNameError(false)
        }
        
    }
    const passwordHandlers=(event)=>{
        const userEnteredPassword=event.target.value;
        setPassword(userEnteredPassword)
        console.log(userEnteredPassword,"password entering....")
        if(userEnteredPassword.length>15){
            setPasswordErr(true)
        }
        else{
            setPasswordErr(false)
        }
    }
    // const validate=(value)=>{
    //     return value.length<15;
        
    // }
    return(
        <>
        {
         Object.keys(userdata).length>0 ?
         <>
        
         
 
         </>
         :
         <form onSubmit={submitHandler} style={{maxWidth:500}}>
         <div>
             <label>UserName</label>
             <input type="text"
             className="form_control"
             id="user"
             placeholder="Enter UserName"
             name="username"
             value={userName}
             onChange={userNameHandlers}/>
            { userNameErr&&<span style={{color:"red"}}>Invalid userName please enter the less 15 characters</span>}
         </div>
         <div>
             <label>Password</label>
             <input 
             type="password"
             className="form_control"
             id="pwd"
             placeholder="Enter password"
             name="pswd"
             value={password}
             onChange={passwordHandlers}/>
             {passwordErr&&<span style={{color:"red"}}>Invalid userName please enter the less 15 characters</span>}
         </div>
      
         <button type="submit">Submit</button>
     </form>
        }
        <h3>List Registration User..</h3>
        <ol>
        {
            list.map((each)=>{
                <li>{each}</li>
                {console.log(each.id)}
            })
        }
       </ol>
            
       
        
        

    </>
    )
}
export default From_ListComponent;