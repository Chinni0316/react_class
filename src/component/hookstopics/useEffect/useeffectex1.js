import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";

const CountComponent = () => {
  const [count, setCount] = useState(10);
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("Use effect executed...");
    document.title = "Hello User";
    fetchRecipes();
  }, []);

  const countHandler = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const fetchRecipes = async () => {
    try {
      const { status, data } = await axios.get("https://dummyjson.com/recipes");
      if (status === 200) {
        setRecipes(data.recipes);
        setLoading(false);
        console.log(data);
      }
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  return (
    <React.Fragment>
      <h3>Recipes</h3>
      { recipes.loading ? (
        <h3>Please wait...</h3>
      ) : (
        recipes.map((each,id) => {
         return <div key={id}>
             <h2> ID: {each.id}</h2>
            <h4>RecipesName: {each.name}</h4>
            <h4> caloriesPerServing: {each.caloriesPerServing}</h4>
            <h6>Ingredients: {each.ingredients}</h6>
            <p>Instructions: {each.instructions}</p>
            <h4>mealType: {each.mealType}</h4>
           
          </div>
})
      )}
      <div>
        <h4>Count: {count}</h4>
        <button onClick={countHandler}>Increment Count</button>
      </div>
    </React.Fragment>
  );
};

export default CountComponent;
