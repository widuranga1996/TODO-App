import React, { Fragment, useEffect, useState } from "react";
import EditTodo from "./EditTodo";

const ListToDos = () => {

    const [todos, setTodos] = useState([]);

    // delete todo function
    const deleteTodo = async (id) => {
      try {
        const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
          method:"DELETE"
        });
        // console.log(deleteTodo);
        setTodos(todos.filter(todo => todo.todo_id !== id));
      } catch (err) {
        console.error(err.message);
      }
    }

    // list to do function
    const getTodos = async () => {
        try {
            const response = await fetch("http://localhost:5000/todos");
            const jsonData = await response.json();

           setTodos(jsonData);
        } catch (err) {
            console.log(err.message);
        }
    }

    useEffect(() => {
        getTodos();
    }, []);
    // console.log(todos);
      return <Fragment>
        <table className="table">
          <thead>
            <tr>
              <th>Description</th>
              <th>Add</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {/* <tr>
              <td>John</td>
              <td>Doe</td>
              <td>john@example.com</td>
            </tr> */}
           {todos.map(todo =>(
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td>
                <EditTodo todo={todo}/>
              </td>
              <td><button 
              className="btn btn-danger"
              onClick={() => deleteTodo(todo.todo_id)}
              >Delete</button></td>
            </tr>

           ))}

          </tbody>
        </table>
    </Fragment>;
}

export default ListToDos;