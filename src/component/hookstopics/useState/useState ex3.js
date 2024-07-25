import { useState } from "react"
import { greetingFun } from "../../../greetingjs/greeting"


const ShowGreeting=()=>{
    const [greeting,setGreeting]=useState("")
    const  Greeting_handler=()=>{
        const Greetingstring=greetingFun()
        console.log(Greetingstring)
        setGreeting(Greetingstring)
    }
     function greetingFun() {
        let date = new Date();
        let hours=date.getHours();
      //   let hours = ;
        console.log(hours);
        // let minute=date.getMinutes();
        // let seconds=date.getSeconds();
        let greeting;
        if( hours>0 && hours <6){
          greeting=" Early Morning"
          console.log(greeting,"greeting consoled")
        }
        else if(hours>6 && hours<11) {
          greeting="Morning"
          console.log(greeting)
      
        }
        else if(hours>11 && hours<16){
          greeting="After noon.."
          console.log(greeting)
        }
        else if (hours>16 && hours<20){
          greeting="Evening ..."
          console.log(greeting)
        }
        else {
          greeting="Evening"
          console.log(greeting)
        }
      
      
      // 
      }
    return(
        <>
        <h2>Welcome user..{greeting}</h2>
        <button onClick={Greeting_handler}>Add Greeting</button>
        </>

    )
}
export default ShowGreeting;