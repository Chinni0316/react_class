const Heading=(prop)=>{

        let {title="default"}=prop;
        //   title="hello";
       return( <h2>{title}</h2>
     
        
    )
}
export default Heading;
// named component creations..
  export const Heading1=()=>{
    return(
        <h2>Student Details</h2>
    )
}
export const Heading2=()=>{
    return(
        <h2>Movies Names</h2>
    )
}
export const Heading4=()=>{
    return(
        <h2>Instructions</h2>
    )
}