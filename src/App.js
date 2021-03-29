import React from "react";
import TopNavBar from "./components/TopNavBar";
import LeftNavBar from "./components/LeftNavBar";
import Dashboard from "./components/Dashboard";
import './App.css';

function App() {
  return (
    <div className="App">
      <TopNavBar/>
      <LeftNavBar/>
    </div>
  );
}

export default App;
