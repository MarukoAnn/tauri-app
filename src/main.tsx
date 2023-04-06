import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { invoke } from "@tauri-apps/api/tauri";
import "./styles.css";
import { loginWin } from "./windows/actions";
document.addEventListener('DOMContentLoaded', async() => {
  invoke('close_splashscreen');
  await loginWin();
})

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
