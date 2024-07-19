import { Ipldata } from "./Ipldata";
import "./Iplmatch.css"
import CustomProgressBar from "../bootstrap/progress-bar";

const IplItem=()=>{
    const {name,source,trophy,no_players}=Ipldata;
    
    const calculatePercentage=(input)=>{
        const base=17
        let percentage=(input/base)*100
        return percentage

    };
    handleClick=(targetid)=>{
        const newState=this.iplhandler(IplItem,targetid)
        this.setState({
            IplItem:newState,
        });
    };
    iplhandler=(IplItem,targetid)=>{
        const updatedIplTeam=IplItem.map(eachIpldata=>{
            if(eachIpldata.id===targetid){
                return{...eachIpldata,trophy:eachIpldata.trophy+1}
            }
            else{
                return eachIpldata
            }
        })
        return updatedIplTeam
    }
    
    return(

        

        <div>
            <h1>Indian Premier League</h1>
            <div className="navbar">
                <p>Home</p>
                <p>About</p>
                <p>Contant</p>
                <p>Team</p>
            </div>
            
            <div className="cards">

        {Ipldata.map((eachIpldata)=>(
            <center style={{display:"grid"}}><div  className="main">
                    <h3>{eachIpldata.name}</h3>
                    <h3>No_Players: {eachIpldata.no_players}</h3>
                    <img src={eachIpldata.source}  width={150} height={150}/>
                     <h3>Trophy: {eachIpldata.trophy}</h3>
                     <button onClick={()=>this.handleClick(eachIpldata.id)}></button>
                    <CustomProgressBar scale={calculatePercentage(eachIpldata.trophy)}/><br></br>
                </div></center>
            
        ))}
        </div>
         <div className="footer">
            <p>Thank for visit .We will provide more information..</p>
            
        </div>
        <button>button</button>
        </div>
    )
}
export default IplItem;
