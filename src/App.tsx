import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import { relaunch } from "@tauri-apps/api/process"
import { loginWin, createWin } from "./windows/actions";
import { BrowserRouter as Router } from "react-router-dom"
import ViewRouter from './router/index'
import Windows from "./windows/index";
import "./App.css";
new Windows();

function App() {
  return (
    <div className="App center">
      <Router>
        <ViewRouter />
      </Router>
    </div>
  );
}

export default App;
