import React from "react";
import { Router } from "@reach/router";
import Login from "./Components/Login/Login";
import LoginAdmin from "./Components/LoginAdmin/LoginAdmin";
import "./App.css";

function App() {
  return (
    <Router>
      <Login path="/" />
      <LoginAdmin path="/back-office" />
    </Router>
  );
}

export default App;
