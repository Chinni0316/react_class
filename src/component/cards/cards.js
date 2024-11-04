import axios from "axios"
import { useEffect, useState } from "react"
// import "./card.css"
const cardStyle = {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    margin: "16px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };
  
  const imageStyle = {
    width: "50%",
    height: "auto",
    borderRadius: "10px",
  };
  
  const titleStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "10px",
  };
  
  const priceStyle = {
    color: "green",
    fontWeight: "bold",
    marginBottom: "10px",
  };
  
  const descriptionStyle = {
    fontSize: "14px",
    color: "#555",
  };
  

const FunctionCards=()=>{
    const [products,setProducts]=useState([])
    
    useEffect(()=>{
        fetchProduct();
    },[])

    const fetchProduct=async()=>{
        try{
            const {data,status}=await axios.get(`https://dummyjson.com/products`)
            if(status===200){
            console.log(data.products)
            setProducts(data.products)
        }
           
        }catch(err){
            console.log(err)

        }
    }
    return(
        <>
      {products.map((each) => (
        <div key={each.id} style={cardStyle}>
          <img src={each.thumbnail} alt={each.title} style={imageStyle} width={200} height={200} />
          <h4 style={titleStyle}>{each.title}</h4>
          <p style={priceStyle}>${each.price}</p>
          <p style={descriptionStyle}>{each.description}</p>
        </div>
      ))}
        </>
    )
}
export default FunctionCards;
