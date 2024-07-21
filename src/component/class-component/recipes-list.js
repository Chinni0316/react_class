import axios from "axios";
import React, { Component } from "react";
import Custom_List from "../simple_list/custom_list";
import Heading, { Heading1 } from "../headings/headings";



class RecipeList extends Component{
    state={
        recipes_list:[],
        loader:false,
        error:false
    };
    fetchrecipes=async()=>{
        try{
        const {status,data}=await axios.get("https://dummyjson.com/recipes");
        console.log(data,status)
        if(status===200){
            this.setState({
                recipes_list:data.recipes,
                loader:false
            })
        }
        }catch(err){
            this.setState({
                error:true,
                loader:false
            })

            
        }
    };
    componentDidMount(){
        this.fetchrecipes();
    }
    render(){
        return(
        <React.Fragment>
         
         {/* <h2>hello</h2> */}
        {
            this.state.loader?
            <h4>Please wait....</h4>
            :(
            <div>
            {
            this.state.recipes_list.map((eachdata,id)=>{
                const {name,image,ingredients}=eachdata;
                return(
                    <React.Fragment key={id}>
                      <h4 >Recipes_name: {name}</h4>
                      <img src={image} width={200} height={200}/>
                      {/* <Heading title={`Ingredients to prepare the recipes${name}`}/> */}
                      <Heading title={`Ingredients to prepare the recipes${name}`}/>
                    <Custom_List list={ingredients}></Custom_List>
                       {/* <p> {ingredients}</p> */}
                    </React.Fragment>
                )
            })}
            {/* <>{this.recipes_list.repices.name}</> */}
            </div>)
        }
        
    
        </React.Fragment>
        )
    }
}
export default RecipeList;