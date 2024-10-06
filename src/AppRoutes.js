import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './login';
import Home from './Home';
import Table from './Table';
import Graph from './Graph';
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/table" element={<Table />} /> 
        <Route path="/graph" element={<Graph />}/>  
      </Routes>
    </Router>
  );
};

export default AppRoutes;
