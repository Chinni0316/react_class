import { Component } from "react";

class Counter extends Component{
    state={
        count:10
    };
    inscrementhandler=()=>{
        this.setState(
            {
                count:this.state.count+1,
            },()=>{}
        );
    };
    decrementhandler=()=>{
        
        this.setState(
            {
                count:this.state.count-1,
            },()=>{}
        );
    };
    resethandler=()=>{
        this.setState(
            {
                count:10
            }
        )
    }
    render(){
        return(
            <>
            <center>
            <div style={{width:300,height:300 ,border:"2px solid black",borderRadius:"5px",backgroundColor:"white"}}>
           <h2>My counter </h2>
           <br/>
           
           <h3>{this.state.count}</h3>
           <br></br><br></br>
           <button onClick={this.inscrementhandler}style={{ borderRadius:"5px"}}>Inscrement</button>
           <button onClick={this.decrementhandler} style={{borderRadius:"5px"}}>Decrement</button><br></br><br></br>
           <button onClick={this.resethandler} style={{borderRadius:"5px"}}>Reset</button>
           </div>
           </center>
            </>
        )
    }
}
export default Counter;
