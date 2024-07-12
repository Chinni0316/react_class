import logo from './logo.svg';
import './App.css';

import Greeting from './component/greeting/greeting';

const student=["Ashwini","Srinivas","Rahul","Praveen","Ramulu","Sriya",]
function App() {
  return (
    <div>
    {
      student.map((eachstudent,index)=>
        <div key={index}> 
        <Greeting>
          <Card>{eachstudent}</Card>
       </Greeting>
       </div>
      )
    }
    </div>
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
