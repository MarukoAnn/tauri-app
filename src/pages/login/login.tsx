import React from "react";
import useUtilsHooks from "../../hooks/useUtilsHook";
import { createWin, setWin, getWin } from "../../windows/actions";
import { invoke } from "@tauri-apps/api/tauri";
const Login = () => {
    const navigation = useUtilsHooks();
    const loginClick = async () => {
        // await setWin('close');
        navigation('/home');
        invoke('close_window')
    //    let mianWin = await getWin('main');
    //    mianWin?.show();
        // await createWin({
        //     label: 'main',
        //     title: '首页',
        //     url: '/home',
        //     width: 800,
        //     height: 600,
        //     minWidth: 300,
        //     minHeight: 200,
        //     decorations: true
        // })
    }

    return (<div>
        这个是login
        <button onClick={loginClick}> 登陆 </button>
    </div>)
}

export default Login;