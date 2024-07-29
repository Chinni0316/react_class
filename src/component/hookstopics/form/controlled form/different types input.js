import { useRef, useState } from "react"

const InputFormDifferent=()=>{
    const [form,setForm]=useState(null)
    const [err,setErr]=useState(null)
    const userName=useRef()
    const password=useRef()
    const DateOfBirth=useRef()
    const email=useRef()
    return(
        <>
        <form>
            <div>
                <label>UserName </label>
                <input 
                type="text"
                className="form_control"
                placeholder="enter userName"
                ref={userName}/>
            </div>
            <div>
                <label>Password</label>
                <input type="text"
                className="form_control"
                placeholder="Enter password"
                ref={password}/>
            </div>
            <div>
                <label>DateOfBirth</label>
                <input type="year"
                className="form_control"
                placeholder="Enter DateOfBirth"
                ref={DateOfBirth}/>
            </div>
            <div>
                <label>Email Address</label>
                <input type="email"
                className="form_control"
                placeholder="Enter email address"
                ref={email}/>
            </div>
            <button>Submit</button>

        </form>
        </>
    )
}
export default InputFormDifferent;