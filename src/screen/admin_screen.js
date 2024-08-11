
import Footer from "../component/footer/footer";
import withProfile from "../component/Hoc/withProfile";
import NavBar from "../component/navbar/navbar";
import ChildComponent from "../component/reactmemo/child";
import ParentComponent from "../component/reactmemo/parent";

const AdminScreen=(props)=>{
    const {name}=props.data
    console.log(props)
    return(
        <>
        <NavBar/>
        <h3>Welcome to AdminScreen{name}</h3>
       {
        Object.keys(props.data).length>0?(
            <h3>Good Morning {props.data.username}</h3>
        ):(
            <h3>Good Morning User</h3>
        )
      }
     
      <ParentComponent/>
        <Footer/>
        </>
    )
}
export default withProfile(AdminScreen);