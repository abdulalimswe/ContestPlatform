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
import CreateContest from './components/Pages/Contest/ContestForm';
import ContestList from './components/Pages/Contest/ContestList';
import HomeContestPage from './components/Pages/Contest/HomeContestPage';
import ContestProblemList from './components/Pages/Contest/ContestProblemList';
import ContestProblem from './components/Pages/Contest/ContestProblem';
import AdminManageUsers from './components/Pages/AdminUsers/AdminManageUsers';
import EditProfile from './components/Pages/AdminUsers/EditProfile';
import LogIn from './components/Pages/AdminUsers/LogIn';
import Dashboard from './components/Pages/AdminUsers/Dashboard';
import SignUpForm from './components/Pages/AdminUsers/SignUpForm';
import ContestStanding from './components/Pages/Contest/ContestStanding';
import SignOut from './components/Pages/AdminUsers/SignOut';


function App() {
  return (
   
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/problem" element={<Problem/>}/>
          <Route path="/viewproblem/:id" element={<ViewProblem/>}/>
          <Route path="/contests" element={<ContestList/>}/>
          <Route path="/profile" element={ <Profile /> } />
          <Route path="/footer" element={<Footer/>}/>
          <Route path="/compiler" element={<Compiler/>}/>
          <Route path="/CreateProblem" element={<CreateProblem/>}/>
          <Route path="/createcontest" element={<CreateContest/>}/>
          <Route path="/homecontestpage/:id" element={<HomeContestPage/>}/>
          <Route path="/contestproblemlist/:id" element={<ContestProblemList/>}/>
          <Route path="/:id/contestProblem" element={<ContestProblem/>}/>
          <Route path="/admin/manage-users" element={<AdminManageUsers />} />
          <Route path="/profile/edit" element={<EditProfile />} />
          <Route path="/signin" element={<LogIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/signout" element={<SignOut />} />

          {/* Contest Standing */}
          <Route path="/contestStanding/" element={<ContestStanding/>}/>

        </Routes>
      </Router>
    
  );
}

export default App;