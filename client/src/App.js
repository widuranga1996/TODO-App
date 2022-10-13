import React, { Fragment } from "react";
import './App.css';

//components

import InputTodo from "./components/InputToDo";
import ListToDos from "./components/ListToDos";

function App() {
  return (
  <Fragment>
    <div className="container">
        <InputTodo />
        <ListToDos />
        
    </div> 
  </Fragment>
  );
}

export default App;
