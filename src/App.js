import logo from './logo.svg';
import './App.css';
import {Usestate} from 'react' 
import Login from "./pages/Login"
import Register from './pages/Register';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom'
import React from 'react'



function App() {


  return (
    
    <Router>
      <Routes>
        
          <Route path='/' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/home' element={<HomePage/>}/>
      </Routes>
    </Router>
    
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    
  );
}

export default App;
