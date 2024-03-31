import React from 'react'; // Add this import for React
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Indexpage from "./pages/indexpage";
import Login from './pages/loginpage';

// Import any additional components you want to route to
// (e.g., import AboutPage from './pages/AboutPage';)

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/login" element={<Login />} />
        <Route path="/" element={<Indexpage />} />
        {/* Add more routes as needed */}
        {/* Example for an About Page: */}
        {/* <Route path="/about" element={<AboutPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
