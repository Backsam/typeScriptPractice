import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Counter } from './components/Counter';
import Test from './components/Test';
function App() {

  return (
    <div>
      <Test name={"Kim"} job={"Developer"}></Test>
      <Counter></Counter>
    </div>

  )
}

export default App;
