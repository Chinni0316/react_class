import { Component } from "react";

class Mounting_component extends Component{
    constructor(){
        console.log("constructor excuting....")
        super();
        this.state={
            color:"red"
        }
    }
    componentDidMount(){
        console.log("componentDitMount....")
    }
     static getDerivedStateFromProps(props,state){
        console.log("getDerivedStateFromProps...",props)
        return{color:props.my_color};


    }
    render(){
        console.log("rendering ....")
        return(
            <>
            <h2>Mounting parse</h2>
            <h3 style={{color:this.state.color}}>Which color do you like: {this.state.color}</h3>
            <h2 style={{color:this.state.color}}>Favourite color: {this.state.color}</h2>
            </>
        )
    }
}
export default Mounting_component;