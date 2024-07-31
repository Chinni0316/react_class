import { Link } from "react-router-dom"

const InvalidScreen=()=>{
    return(
        <>
        <h3>Invalid screen 404 Error </h3>
        <button><Link to={"/"}>Go to Home</Link></button>
        </>
    )
}
export default InvalidScreen;