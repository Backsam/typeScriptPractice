import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ComponentPage from './pages/ComponentPage';
import Main from './pages/Main';
import "./App.css"
import Board from './pages/Board';
import Header from './components/Header';
import Calculator from './pages/CalculatorPage';
function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/component_page' element={<ComponentPage/>}/>
        <Route path='/tax_calc' element={<Calculator/>}></Route>
        <Route path='/board' element={<Board/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
