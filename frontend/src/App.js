import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Header from './components/Header/Header';
import createProblem from './components/Pages/createProblem';
import Footer from './components/Footer/Footer'
import Problem from './components/Pages/problem';


function App() {
  return (
    <div>
      <Header/>
      <Router>
        
        <Routes>
          <Route path="/problem" element={<Problem/>}/>
          <Route path="/createproblem" element={ <createProblem /> } />
          <Route path="/viewproblem" element={ <viewProblem /> } />
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
