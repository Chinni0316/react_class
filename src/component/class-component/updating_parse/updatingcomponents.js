import { Component } from "react";

class Updating_Component extends Component{
    constructor(){
        super();
        this.state={
            cakecount:20,
        }
    }
    buy_cake_handler=()=>{
        this.setState=({
            cakecount:this.state.cakecount-1
    })

    }
    componentDidUpdate(){
        console.log("componentDidUpdate.....")
    }
    static getDerivedStateFormProps(){
        console.log("getDerivedStateFromProps...")
        return null;

    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate.....")
    }
    getSnapshotBeforeUpdate(){
        console.log("getSnapshortBeforeUpdate...")
    }



    
    render(){
        return(
            <>
             <h2>No of cake count in the shop:{this.state.cakecount}</h2>
             <button onClick={this.buy_cake_handler}> Buy cake</button>
            </>
        )
    }
}
export default Updating_Component;