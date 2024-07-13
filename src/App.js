import logo from './logo.svg';
import './App.css';
import IplItem from './component/Iplmatch/Iplmatch';
import CustomSpinner from './component/spinner/custom_spinner';
import CustomWatch from './component/Watch/custom_watch';
import CustomGrid from './component/bootstrap custm/grid';
import Custom_List from './component/simple_list/custom_list';
import { ListGroup } from 'react-bootstrap';
import "./component/simple_list/listdata"
import Heading, { Heading2, Heading4 } from './component/headings/headings';
import { Heading1 } from './component/headings/headings';




const student=["Ashwini","Chinni","Srinivas","Ramulu","Ganga"]
const value=["KGF","KALKI","KGF-2","ANIMAL"]
const Recipes=["Classic Margherita Pizza"]
const ingredients=["Pizza dough",
        "Tomato sauce",
        "Fresh mozzarella cheese",
        "Fresh basil leaves",
        "Olive oil",
        "Salt and pepper to taste"]
const instructions=[   "Preheat the oven to 475°F (245°C).",
  "Roll out the pizza dough and spread tomato sauce evenly.",
  "Top with slices of fresh mozzarella and fresh basil leaves.",
  "Drizzle with olive oil and season with salt and pepper.",
  "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
  "Slice and serve hot."]

function App() {
  return (
    <div>
      <CustomSpinner></CustomSpinner>
      <CustomWatch></CustomWatch>
      <CustomGrid></CustomGrid>
    {/* <IplItem></IplItem> */}

    <Custom_List list={["Apple","Banana","Cherry"]}></Custom_List>
    <Heading1/>
    <Custom_List list={student}></Custom_List>
    <Heading2></Heading2>
    <Custom_List list={value}></Custom_List>

    <h2><Custom_List list={Recipes}></Custom_List></h2>
    <h2>Ingredients</h2>
    <Custom_List list={ingredients}></Custom_List>
    <Heading4></Heading4>
    <Custom_List list={instructions}/>
   
  
   </div>
     );
}
export default App;

