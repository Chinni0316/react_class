import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { DiSafari } from "react-icons/di"

const FakeStore=()=>{
    const [products,setProducts]=useState([])
    useEffect(()=>{
     fetchProduct();
    },[])
    const fetchProduct=async()=>{
        try{
            const {status,data}=await axios.get("https://fakestoreapi.com/products")
            if(status===200){
                const newData=data.map((each)=>{
                    return{...each,quantity:1}
                })
                console.log(data)
                setProducts(newData)
            }

        }catch(err){
            console.log("err",err)
        }
    }
    const incrementHandler=(targetId)=>{
      
     

     }
     const decrementHandler=(id)=>{
      
 

     }
    return(
        <div>
    
  
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Title</th>
          <th>Image</th>
          <th>Price</th>
          <th>quantity</th>
          <th>Total Price</th>
        </tr>
      </thead>
      {products.map((each)=>{
        return(
<tbody>
        <tr>
          <td>{each.category}</td>
          <td>{each.title}</td>
          <td><img src={each.image} width={100} height={100}/>
        </td>
          <td>{each.price}</td>
          <td>
            <button onClick={()=>decrementHandler(each.id)}>-</button>
            {each.quantity}
            <button onClick={()=>incrementHandler(each.id)}>+</button>

          </td>
          <td>{each.quantity*each.price}</td>
        </tr>
        
      </tbody>
        )
      })}
      
    </Table>
       

            
        </div>
        
    )
}
export default FakeStore;