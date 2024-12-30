import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './components/Pages/Home';
import Footer from './components/Footer/Footer'
import Problem from './components/Pages/problem';
import ViewProblem from './components/Pages/viewproblem';
import Profile from './components/Pages/profile';
import Compiler from './compiler/compiler';
import CreateProblem from './components/Pages/createProblem';


function App() {
  return (
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/problem" element={<Problem/>}/>
          <Route path="/viewproblem/:id" element={<ViewProblem/>}/>
          <Route path="/profile" element={ <Profile /> } />
          <Route path="/footer" element={<Footer/>}/>
          <Route path="/compiler" element={<Compiler/>}/>
          <Route path="/CreateProblem" element={<CreateProblem/>}/>
        </Routes>
      </Router>
  );
}

export default App;
