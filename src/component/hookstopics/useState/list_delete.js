import React, { useState } from "react";

const List_item =()=>{
    const [list,setList]=useState([
        {
            

            recipes_name:"Vegetarian Stir-Fry",
            prepTimeMinutes: 15,
            cookTimeMinutes: 10,
            servings: 3,
            difficulty: " Medium",
            cuisine: "Asian"
        },{
            recipes_name:"Chocolate Chip Cookies",
            prepTimeMinutes: 15,
            cookTimeMinutes: 10,
            servings: 24,
            difficulty: "Easy",
            cuisine: "American"
        },{
            recipes_name:"Chicken Alfredo Pasta",
            prepTimeMinutes: 20,
            cookTimeMinutes: 15,
            servings: 4,
            difficulty: "Medium",
            cuisine: "Italian"
        },{
            recipes_name:"Classic Margherita Pizza",
            prepTimeMinutes: 20,
            cookTimeMinutes: 15,
            servings: 4,
            difficulty: "Easy",
            cuisine: "Italian"
        }
        
    ])
    const List_handler=()=>{
         const newList={
            recipes_name:"Classic Margherita Pizza",
            prepTimeMinutes: 20,
            cookTimeMinutes: 15,
            servings: 4,
            difficulty: "Easy",
            cuisine: "Italian"
        };
        const new_listState=[...list,newList]
        setList(new_listState)
    }
    const List_delete_handler=(each_item)=>{
      
        setList([])
    }

    return(
        <React.Fragment>
            <h4>List of Items</h4>
            <button onClick={List_handler}>add List_item</button><br></br>
            
            {
                list.map((each_item,index)=>{
                    return(
                  <React.Fragment key={index}>
                    <h4>Recipes: {each_item.recipes_name}</h4>
                    <h4>Recipes:{each_item.cookTimeMinutes}</h4>
                    <h4>Recipes: {each_item.cuisine}</h4>
                    <h4>Recipes: {each_item.difficulty}</h4>
                    <h4>Recipes: {each_item.prepTimeMinutes}</h4>
                    <h4>Recipes: {each_item.servings}</h4>
                    </React.Fragment>
                    )
                })
            }
            <br></br>
           <button onClick={List_delete_handler}>Delete List_item all</button>
        </React.Fragment>
    )
}
export default List_item;