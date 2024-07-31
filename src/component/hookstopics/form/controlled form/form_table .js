import { tab } from "@testing-library/user-event/dist/tab"
import {  useState } from "react"

const FormTable=()=>{
    const [userName,setUserName]=useState("")
    const [password,setPassword]=useState("")
    const [userNameErr,SetUserNameError]=useState(false)
    const [passwordErr,setPasswordErr]=useState(false)
    const [userdata,setUserData]=useState({})
    const [table,setTable]=useState([])
   
    
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
                // const totalname=finalResponse.firstName+finalResponse.lastName
                
                setTable([...table,finalResponse])
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
    
    console.log(userdata,table)
    return(
        <>
        {
         Object.keys(userdata).length>0 ?
         <table style={{border:"2px solid black"}}>
         
         <thead>
            <tr>
                <th style={{border:"2px solid black"}}>ID</th>
                <th style={{border:"2px solid black"}}>FirstName</th>
                <th style={{border:"2px solid black"}}>LastName</th>
                <th style={{border:"2px solid black"}} >Email</th>
                <th style={{border:"2px solid black"}}>Gender</th>
                <th style={{border:"2px solid black"}}>Image</th>
            </tr>
         </thead>
         <tbody>
            {table.map((each)=>{
                return(
                <tr key={each.id}>
                    {console.log(each.id,each.firstName)}
                    <td style={{border:"2px solid black"}}>{each.id}</td>
                    <td style={{border:"2px solid black"}}>{each.firstName}</td>
                    <td style={{border:"2px solid black"}}>{each.lastName}</td>
                    <td style={{border:"2px solid black"}}>{each.email}</td>
                    <td style={{border:"2px solid black"}}>{each.gender}</td>
                    <td style={{border:"2px solid black"}}>
                    <img src={each.image} width={200} height={200}/>
                    </td>

                </tr>)
})}
         </tbody>
         
 
         </table>
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
        
        
        </>
    )
}
export default FormTable;