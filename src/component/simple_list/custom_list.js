import "./listdata"
const Custom_List=({list})=>{
    return(
        <ul>
         {list.map((eachitem)=>(
            <li>{eachitem}</li>
        ))}
        </ul>

    )
}
export default Custom_List;