import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Counter } from './components/Counter';
import Test from './components/Test';
import TodoList from './components/TodoList';
function App() {

  return (
    <div>
      <Test name={"Kim"} job={"Developer"}></Test>
      <Counter></Counter>
      <TodoList></TodoList>
    </div>

  )
}

export default App;
