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
------------------------
const Recipes = ({ recipe }) => {
  return (
    <div className='recipeCard'>
      <CustomHeading title={recipe.name} />
      <img src={recipe.image} alt="image missing" height={200} width={200} />
      <p>Cuisine: {recipe.cuisine}</p>
      <p style={{color:'red'}}><b>INGREDIENTS</b></p>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <p style={{color:'red'}}><b>INSTRUCTIONS</b></p>
      <ol>
        {recipe.instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
      <p>preparation time : {recipe.prepTimeMinutes}</p>
      <p>Preparation time : {recipe.prepTimeMinutes}</p>
      <p>cookTimeMinutes : {recipe.cookTimeMinutes}</p>
      <p>servings : {recipe.servings}</p>
      <p>difficulty : {recipe.difficulty}</p>
      <p>cuisine : {recipe.cuisine}</p>
      <p>caloriesPerServing : {recipe.caloriesPerServing}</p>
    </div>
  );
}

export default Recipes;
------
const Recipes_data=(prop)=>{
  const recipe={prop}
    return(
        <div className="recipe-card">
        {/* <img src={recipe.image} alt={recipe.name} />
        <h2>{recipe.name}</h2>
        <p><strong>Difficulty:</strong> {recipe.difficulty}</p>
        <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
        <p><strong>Servings:</strong> {recipe.servings}</p>
        <p><strong>Calories per Serving:</strong> {recipe.caloriesPerServing}</p>
        <p><strong>Rating:</strong> {recipe.rating} ({recipe.reviewCount} reviews)</p>
        <p><strong>Meal Type:</strong> {recipe.mealType.join(', ')}</p>
        <h3>Ingredients:</h3> */}
        <ul>

          {recipe[0].ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h3>Instructions:</h3>
        <ol>
          {recipe[0].instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>
      </div>
    )
}
export default Recipes_data;

