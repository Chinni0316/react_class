import ListItem from "../List/ListItems";

const Conditinalrendering=()=>{
    const islogin=true;
    const isadmin=false;
    const greeting=true;
    const Subscribes=10;
    const subscribes=0
    return(
        <>{islogin?(
        <>{
            isadmin?(<>
               <h2> welcome admin</h2>
               <ListItem></ListItem>
            </>):(
            <>
                <h2> welcome user</h2>
                <ListItem></ListItem>
            </>)}
           {
            greeting &&<h2>Thank you for login,Explore the data</h2>
           },{
            Subscribes &&<h2>Subscribes count {Subscribes}</h2>
           },{
           <h2>subscribes count {subscribes}</h2>
           }

        </>):
         (<>
        <h2>pleace login with currect details</h2>
        </>)}
        </>
    )
}
export default Conditinalrendering;