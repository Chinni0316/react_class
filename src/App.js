import React from "react";
// import Card from "./component/recipes/recipes";
import Conditinal_rendering from "./component/class-component/condtional";


const App = () => {
    const array=["Ashwini","Srinivas","Ramulu","Rakmini","Priya"];
    const Array1=[1,2,4,3,6,7,8,9,10]
    const Obj=[
        {
        name:"Ashwini",
        age:22,},
        {
            name:"Srinivas",
            age:25,
        },{}
    ]
    const arr1=["","",""]
    const empty=[]
    
    const arr=[[1,2,3,5,4],[2,2,4,5,6],[8,9,49,8],[]]

return(
    
    <><center>
        <h2>Array of strings:</h2>
 <Conditinal_rendering Ashwini={array}/>
 <h2>Array of numbers:</h2>
 <Conditinal_rendering Ashwini={Array1}/>
 <h2>Array of objects:</h2>
 <Conditinal_rendering Ashwini={Obj}/>
 <h2>Array of neside array:</h2>
 <Conditinal_rendering Ashwini={arr}/>
 <h2>Array with empty strings:</h2>
 <Conditinal_rendering Ashwini={arr1}/>
<h2>Empty array:</h2>
 <Conditinal_rendering Ashwini={empty}/>
</center>
    </>
)
};

export default App;




 

      
      
  

   
