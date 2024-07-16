import Conditinal_rendering1 from "./conditon";
import Conditinal_rendering from "./condtional";

const { Component}=require("react")
class SubscribeComponent extends Component{
// state  creation 
state={
    isSubscribe:true,
    text1:"Subscribe",
    text2:"Subscribed",
}
handleClick=()=>{
    console.log("clicked")
    this.setState(
        {
        isSubscribe:!this.state.isSubscribe,
        },()=>{}
    );
};
render(){
    return(
        <>
        <button onClick={this.handleClick}>
            {this.state.isSubscribe?this.state.text2:this.state.text1}
        </button>
        {
            this.state.isSubscribe?(
            <>
             <h2>Thanks for subscribing</h2>
             <Conditinal_rendering1></Conditinal_rendering1>
            </>

        ):(<h2>pleace subscribes to access</h2>

        )}
        </>
    )
}
}

export default SubscribeComponent;