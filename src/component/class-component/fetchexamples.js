import { Component } from "react";
import axios from "axios";
export default class FetchExamples extends Component{
    state={
        products:[],
        loader:true,
        error:(false),
    };
    
    fetchProducts=async()=>{
        try{
        const response=await axios.get("https://fakestoreapi.com/products");
        console.log(response)
        if(response.status===200){
            this.setState({
                products:response.data,
                loader:false
            })
        }}
        catch(err){
            this.setState({
                error:true,
                loader:false
            })
        }
    }
    render(){
        return(
            <>
            <button onClick={this.fetchProducts}>Fetch Data</button>
            {this.state.loader?
            (<h2>Please wait.....</h2>):(
                <>
                {this.state.products.map((each,id)=>{
                    
               return<div style={{border:"2px solid black",textAlign:"center"} } key={id}>
                <h3 key={each.id}>{each.title}</h3><h2>{each.category}</h2> <img src={each.image } width={200} height={200}/><p>{each.description}</p><h3>{each.price}</h3><h3>{each.rating.rate}</h3>
               
               </div>
                
             
                
               
            })}
            </>
        )}
            </>
        )
    }
}