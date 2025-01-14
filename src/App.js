import React from 'react';
import LoginForm from './components/LoginForm';
import RegisterUser from './components/RegisterUser';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterUser />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
