import"./recipes"

const UnorderList = ({array} ) => {
  return (
    <ul>
    {array.map((each,index)=>(
      <li key={index}>{each}</li>
    ))}
    </ul>
   
   
  );
}

export default UnorderList;
export const OrderList=({array})=>{
  return(
    <ol>
      {array.map((each,index)=>(
        <li key={index}>{each}</li>
      ))}
    </ol>
  )

}
