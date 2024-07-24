import React, { useState } from "react";

const UseState_table=()=>{
    const [table,set_table]=useState([
        {
            recipes_name:"Classic Margherita Pizza",
            prepTimeMinutes: 20,
            cookTimeMinutes: 15,
            servings: 4,
            difficulty: "Easy",
            cuisine: "Italian"
        }
        ,{
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
        }
    ])
    const table_handler=()=>{
        const new_table={
            recipes_name:"Classic Margherita Pizza",
            prepTimeMinutes: 20,
            cookTimeMinutes: 15,
            servings: 4,
            difficulty: "Easy",
            cuisine: "Italian"
        };
        const new_tableState=[...table,new_table]
        set_table(new_tableState)
    }
    const delete_handler=(index)=>{
  const final_result=table.filter((_,ind)=>ind!=index)
        set_table(final_result)

    }
    return(
        <React.Fragment>
         <h3>UseState_table</h3>
         <button onClick={table_handler}>add table</button>
        <table style={{borderCollapse:"collapse" ,width:"100%"}}>
            <thead>
            <tr>
                <th style={{border:"2px solid black"}}>Recipes_name</th>
                <th style={{border:"2px solid black"}}>servings</th>
                <th style={{border:"2px solid black"}}>cookTimeMinutes</th>
                <th style={{border:"2px solid black"}}>prepTimeMinutes</th>
                <th style={{border:"2px solid black"}}>difficulty</th>
                <th style={{border:"2px solid black"}}>cuisine</th>
            </tr>
            </thead>
        
         {table.map((each_table,index)=>{
            return(
                <React.Fragment key={index}>
                    <tr>

                    <td style={{border:"2px solid black"}}> {each_table.recipes_name}</td>
                    <td style={{border:"2px solid black"}}> {each_table.servings}</td>
                    <td style={{border:"2px solid black"}}> {each_table.cookTimeMinutes}</td>
                    <td style={{border:"2px solid black"}}> {each_table.prepTimeMinutes}</td>
                    <td style={{border:"2px solid black"}}> {each_table.difficulty}</td>
                    <td style={{border:"2px solid black"}}> {each_table.cuisine}</td>
                    <button onClick={()=>delete_handler(index)}>delete </button>
                    </tr>
                    
                    </React.Fragment>
            )
         })}
         
         
          </table>
        </React.Fragment>
    )
}
export default UseState_table;