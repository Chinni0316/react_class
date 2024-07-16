import ListItem from "../List/ListItems";
const login1=[
    "Successfuly login",
    "woooo"
]

const Conditinal_rendering1=()=>{
    const islogin=true;
    if(islogin){
        return(
            <>
            <h2>Welcome user</h2>
            <ListItem></ListItem>
            </>
        )
    }
    else{
        return(
            <>
            <h2>
                Pleace login
            </h2>
            </>
        )
    }
}
export default Conditinal_rendering1;