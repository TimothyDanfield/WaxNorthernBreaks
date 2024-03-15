import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar/Navbar"; // Assuming Navbar.js is in the same directory
import Shop from "Shop.js";
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Shop />
      </div>
    </Router>
  );
}

export default App;
