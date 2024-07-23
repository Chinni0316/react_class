import axios from "axios";
import React, { Component } from "react";
import "./card.css"


class CardComponent extends Component{
    state=({
        placeholder:[],
        image:[
            "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
            "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
            "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
            "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
            "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
            "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
            "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
            "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
            "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg"
        ],
        loader:true,
        error:false,
        search_query:""
    })
    fetch_placeholder=async ()=>{
        try{
            const {data,status}=await axios.get("https://jsonplaceholder.typicode.com/users")
            console.log(data,status)
            if(status===200){
                this.setState({
                    placeholder:data,
                    loader:false,
                    
                })
            }
            
        }catch(err){
            this.setState({
                error:true,
                loader:false,
            })

        }
    }
    componentDidMount(){
        this.fetch_placeholder();
    }
    handleSearchChange = (e) => {
        this.setState({ search_query: e.target.value });
      };
    render(){
        const {placeholder,image,loader,search_query}=this.state;
        const filtered=placeholder.filter(each_data=>each_data.name.toLowerCase().includes(search_query.toLowerCase())
    );

        return(
            <React.Fragment>
                  <input
          type="text"
          placeholder="Search by name"
          value={search_query}
          onChange={this.handleSearchChange}
        />
                <center><h2>CardComponent</h2></center>
                {this.state.loader?
                <h3>Place wait.....</h3>
            :(
                <React.Fragment >
                {this.state.placeholder.map((each_data,id)=>{
                    const {name,email,username,phone,image}=each_data
                    const images=this.state.image[id% this.state.image.length]
                    return<div className="Main">
                    <div key={id} className="card">
                        <img src={images}/>
                        <h6>Name: {name}</h6>
                        <h6>email: {email}</h6>
                        <h6>username:{username}</h6>
                        <h6>phone:{phone}</h6>
                        
                    </div>
                    </div>
                })}
                </React.Fragment>
            )
            
            }

            
            </React.Fragment>
        )
    }
}
export default CardComponent;