import { Ipldata } from "./Ipldata";
import "./Iplmatch.css"

const IplItem=()=>{
    const {name,source,trophy,no_players}=Ipldata
    return(

        <div>
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
                
            </div></center>
            
        ))}
        </div>
         <div className="footer">
            <p>Thank for visit again..</p>
            <p>Done by Ashwini..</p>

         </div>
        </div>
    )
}
export default IplItem;
