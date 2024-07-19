import { Component } from "react";
import "./square.css"

class SquareComponent extends Component{
    state={
        squarearray:[]
    };
    addsquarehandler=()=>{
        const newState=[...this.state.squarearray,1]
        this.setState({
            squarearray:newState
        })
    }

    render(){
        return(
            <>
            <div>
            <h2>Square conters;</h2>
            {/* <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div> */}
            <button onClick={this.addsquarehandler}>Add square</button>
            {this.state.squarearray.map((each,index)=>{
                return(
                    <div className={
                        (index+1)%2===0?"square-card-highlight":"square-card-not-highlight"
                    }>
                    {index+1}
                    </div>
                )
            })}
            </div>
            </>
        )
    }
}
export default SquareComponent;