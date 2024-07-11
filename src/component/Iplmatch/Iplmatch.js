import { Ipldata } from "./Ipldata";

const IplItem=()=>{
    const {name,source,trophy,no_players}=Ipldata
    return(
        <>

        {Ipldata.map((eachIpldata)=>(
            <center><div style={{border:"2px solid black"}}>
                    <h3>{eachIpldata.name}</h3>
                    <h3>{eachIpldata.no_players}</h3>
                    <img src={eachIpldata.source}  width={150} height={150}/>
                    <h3>Trophy</h3>
                    <h3>{eachIpldata.trophy}</h3>
                
            </div></center>
        ))}
        </>
    )
}
export default IplItem;