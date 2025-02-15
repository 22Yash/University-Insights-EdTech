import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navabr';
import RedirectHandler from './components/RedirectHandler'; // Import the new redirect component

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <RedirectHandler /> {/* This will handle role-based redirection */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
