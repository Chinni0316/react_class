import React, { useState } from "react";

const UseState_example1 =()=>{
    const [todos,set_todos]=useState([
        {
            period:"Morning",
            todos:"wake up at a 8 o'clock"
        },
        {
            period:"After noon",
            todos:"lunch at 1:30 o'clock"
        }
    ]);
    const todo_handler=()=>{
        const new_todos={
            period:"Evening",
            todos:"break at 5pm "
        };
        const new_todosState=[...todos,new_todos]
        set_todos(new_todosState)
        console.log("todos")
    }
    const delete_handler=(index)=>{
        console.log(index,todos)
     const final=todos.filter((_,index1)=>index1!=index)
     set_todos(final)
    }
    return(
        <>
          <h3>UseState_example1</h3>
          <button onClick={todo_handler}>Add todos</button>
          {
            todos.map((each_todo,index)=>{
                return(
                    <React.Fragment key={index}>
                    <h4>Current todos:{each_todo.period}</h4>
                    <h4>Current todos: {each_todo.todos}</h4>
                    <button onClick={()=>delete_handler(index)}>Delete </button>
                    </React.Fragment>
                )
            })
          }
        </>
    )
}
export default UseState_example1;