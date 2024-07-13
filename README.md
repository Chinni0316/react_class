This one of the way to access the children props...
import React from "react";
 const Greeting=(prop)=>{
    return(
        <React.Fragment>
            {prop.children}
            <h3>This one the  website</h3>

        </React.Fragment>
    )
}
export default Greeting;
___________
const student=["Ashwini","Srinivas","Rahul","Praveen","Ramulu","Sriya",]
function App() {
  return (
    <>
    {
      student.map((eachstudent)=>
        <Greeting>
          <h1>Good Morning ...{eachstudent}</h1>
          <h1>This One of best Website we can revisit.websites</h1>
        </Greeting>
      )
    }
     
      </>
     );
}


export default App;
_______________________

 import React from "react";
 const Greeting=(prop)=>{
    return(
        <React.Fragment>
          <h1>Good Morning ...{prop.children}</h1>
          <h1>This One of best Website we can revisit.websites</h1>
           <h2>This sunday am going to my home...</h2>
        </React.Fragment>
    )
}
export default Greeting;
const student=["Ashwini","Srinivas","Rahul","Praveen","Ramulu","Sriya",]
function App() {
  return (
    <>
    {
      student.map((eachstudent)=>
        <Greeting>
          {eachstudent}
        </Greeting>
      )
    }
    </>
     );
}
export default App;
______________________
const student=["Ashwini","Srinivas","Rahul","Praveen","Ramulu","Sriya",]
function App() {
  return (
    <>
    {
      student.map((eachstudent)=>
        <Greeting>
          <Card name={eachstudent}/>
       </Greeting>
      )
    }
    </>
     );
}
export default App;
const Card=(prop)=>{
  return(
    <>
    <h4>Good morning {prop.name}</h4>
    <h4>Week end.</h4>
    </>
  )
}
___________
 import React from "react";
 const Greeting=()=>{
    return(
        <React.Fragment>
          {prop.children}
          <h1>This One of best Website we can revisit.websites</h1>
           
        </React.Fragment>
    )
}
export default Greeting;
----------------------
const student=["Ashwini","Srinivas","Rahul","Praveen","Ramulu","Sriya",]
function App() {
  return (
    <>
    {
      student.map((eachstudent)=>
        <Greeting>
          <Card>{eachstudent}</Card>
       </Greeting>
      )
    }
    </>
     );
}
export default App;
const Card=(prop)=>{
  return(
    <>
    <h4>Good morning {prop.children}</h4>
    <h4>Week end.</h4>
    </>
  )
}
------------------------------
import "./listdata"
const Custom_List=({list})=>{
    return(
        <ol>
         {list.map((eachitem)=>(
            <li>{eachitem}</li>
        ))}
        </ol>

    )
}
export default Custom_List;

----
const student=["Ashwini","Chinni","Srinivas","Ramulu","Ganga"]
const value=[1,4,6,3,10]
function App() {
  return (
    <div>
      
    
    <Custom_List list={["Apple","Banana","Cherry"]}></Custom_List>
    <Custom_List list={student}></Custom_List>
    <Custom_List list={value}></Custom_List>
    {/* <Custom_List list={list.name}></Custom_List> */}
  </div>
     );
}
export default App;

