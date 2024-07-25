
import axios from "axios";
import React, { useEffect, useState } from "react";

const TableComponent = () => {
  const [table, setTable] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const { status, data } = await axios.get("https://dummyjson.com/recipes");
      if (status === 200) {
        setTable(data.recipes);
        setLoading(false);
        console.log(data);
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <React.Fragment>
      <h3>Recipes</h3>
      {loading ? (
        <h3>Please wait...</h3>
      ) : (
        <table>
          <thead>
            <tr>
              <th style={{ border: "2px solid black" }}>ID</th>
              <th style={{ border: "2px solid black" }}>Recipe Name</th>
              <th style={{ border: "2px solid black" }}>Calories Per Serving</th>
              <th style={{ border: "2px solid black" }}>Meal Type</th>
              <th style={{ border: "2px solid black" }}>Ingredients</th>
              <th style={{ border: "2px solid black" }}>Instructions</th>
            </tr>
          </thead>
          <tbody>
           {table.map((each,id)=>{
            return(
                <tr key={each.id}>
                <td style={{ border: "2px solid black" }}>{each.id}</td>
                <td style={{ border: "2px solid black" }}>{each.name}</td>
                <td style={{ border: "2px solid black" }}>{each.caloriesPerServing}</td>
                <td style={{ border: "2px solid black" }}>{each.mealType}</td>
                <td style={{ border: "2px solid black" }}>{each.ingredients.join(", ")}</td>
                <td style={{ border: "2px solid black" }}>{each.instructions}</td>
              </tr>
            )
           })}
          </tbody>
        </table>
      )}
    </React.Fragment>
  );
};

export default TableComponent;
