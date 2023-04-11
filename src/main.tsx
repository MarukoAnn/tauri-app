import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";
import { invoke } from "@tauri-apps/api/tauri";
import { loginWin, getWin } from "./windows/actions";

document.addEventListener('DOMContentLoaded', async() => {
  // if(!useMobxLoginStore.getToken()) {
    let label = await getWin('splashscreen');
    // 判断是不是第一次启动加载框。是的话就跳转到登陆
    if(label) {
      invoke('close_splashscreen');
      await loginWin();
    }
})

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
