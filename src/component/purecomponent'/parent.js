import { Component } from "react";
import ChildComponent from "./child";
import { ToggleButton } from "react-bootstrap";

class ParentComponent extends Component{
    // constructor(){
    //     console.log("parent constructors..")
    // }
    state={
        toggleButton:false,
    }
    toggle_handlers=()=>{
        this.setState({
            toggleButton:!this.state.toggleButton
        })
    }
    componentDidMount(){
        this.toggle_handlers();
        console.log("componentDidMount for parent....")
    }
    componentDidUpdate(){
        console.log("compnentDidUpdate for parent...")
    }
    componentDidCatch(){
        console.log("componentDidCatch child..")
    }
    render(){
        console.log("parent rendering.....")
        return(
            <div>
                <ChildComponent/>
            <h2>Parent</h2>
            <button onClick={this.toggle_handlers}>ToggleButton</button>
            </div>
        )
    }
}
export default ParentComponent;