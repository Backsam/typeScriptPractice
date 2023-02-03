import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ComponentPage from './pages/ComponentPage';
import Main from './pages/Main';
import "./App.css"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/component_page' element={<ComponentPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
