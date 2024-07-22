import { Component, PureComponent } from "react";

class ChildComponent extends PureComponent{
  
    componentDidMount(){
        // this.toggle_handlers();
        console.log("componentDidMount for child....")
    }
    componentDidUpdate(){
        console.log("compnentDidUpdate for child...")
    }
    componentDidCatch(){
        console.log("componentDidCatch child..")
    }
    render(){
        console.log("child rendering.....")
        return(
            <h2>Child_component</h2>
        )
    }
}
export default ChildComponent;