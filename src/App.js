import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import EmployeePage from './Pages/EmployeePage';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/employees" element={isAuthenticated ? <EmployeePage /> : <LoginPage setIsAuthenticated={setIsAuthenticated} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
