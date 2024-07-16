import { Component } from "react";
import ListItem from "../List/ListItems";
import Custom_List from "../simple_list/custom_list";

class Todocomponent extends Component{
    
        state={
            todos:["watch kalki movies on 17 july","Watch the Bharath-2 movie on 23 july"]
        };
        addTodohandler=()=>{
            const newstate=[...this.state.todos,"Watch kalki-2 on july 2026"]
            this.setState({
                todos:newstate
            })
        };
        render(){
        return(
            <>
            <h2>I am todo component</h2>
            <Custom_List list={this.state.todos}/>
            <button onClick={this.addTodohandler}>click to add todo</button>
            
            <ol>{
                this.state.todos.map(each=>{
                    return<li>{each}</li>
                })}
                </ol>
            </>
        )
    }
    
}
export default Todocomponent;