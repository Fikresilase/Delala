import React from "react"; // Add this import for React
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Indexpage from "./pages/indexpage";
import Login from "./pages/loginpage";
import Layout from "./layout";
import Register from "./pages/register";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000/";
// Import any additional components you want to route to
// (e.g., import AboutPage from './pages/AboutPage';)

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route index element={<Indexpage />} />
          {/* Add more routes as needed */}
          {/* Example for an About Page: */}
          {/* <Route path="/about" element={<AboutPage />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
