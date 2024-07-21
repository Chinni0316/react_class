import axios from "axios";
import React, { Component } from "react";
import "../tables/table.css"

class Recipes_table extends Component{
    state={
        recipes_lists:[],
        loader:false,
        error:false
    };
    fetch_recipes=async()=>{
        try{
            const {status,data}=await axios.get("https://dummyjson.com/recipes");
            console.log(data)
            if(status===200){
                this.setState({
                    recipes_lists:data.recipes,
                    loader:false
                })
            } 
        }catch(err){
            this.setState({
                error:true,
                loader:false
            })
         }
    }
    componentDidMount(){
        this.fetch_recipes();
    }
    render(){
        return(
            <React.Fragment>
                <h2>Recipes</h2>
                {
                    this.state.loader?
                    <h3>Please wait...</h3>
                    :
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>Ingredients</th>
                            <th>Instructions</th>
                        </tr>
                        {this.state.recipes_lists.map((each_recipes,id)=>(
                            <tr key={id}>
                                <td>{each_recipes.name}</td>
                                <td>{each_recipes.instructions}</td>
                                <ul>
                                    {each_recipes.ingredients.map((ingredient,index)=>(
                                        <li>{ingredient}</li>
                                    ))}
                                </ul>
                            </tr>
                        ))}
                    </table>
                }
            </React.Fragment>
        )
    }
}
export default Recipes_table;