import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your page components
import App from './App';
import Profile from './Profile';
import Backgrounds from './Backgrounds';



const Way = () =>{
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<App/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/backgrounds" element={<Backgrounds/>} />
      </Routes>
      </Router>
    );
}
export default Way