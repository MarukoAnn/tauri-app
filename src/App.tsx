import React from "react";
import { BrowserRouter as Router } from "react-router-dom"
import ViewRouter from './router/index'
import Windows from "./windows/index";
import WinBar from "./components/winBar/winBar";
import "./App.css";
new Windows();

function App() {
  return (
    <div className="App center">
      <WinBar />
      <Router>
        <ViewRouter />
      </Router>
    </div>
  );
}

export default App;
