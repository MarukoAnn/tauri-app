import React from "react";
import { observer } from 'mobx-react-lite'
import useUtilsHooks from "../../hooks/useUtilsHook";
import { invoke } from "@tauri-apps/api/tauri";
import store from "../../store";
import styles from './login.module.scss';
const { useMobxLoginStore } = store;
const Login: React.FC = () => {
    const navigation = useUtilsHooks();
    const loginClick = async () => {
        useMobxLoginStore.setToken('xxx');
        navigation('/home');
        invoke('close_window')
    }
    return (
        <div className={styles.container}>
            <div className={styles.user}>
                <input type="text" />
            </div>
            <div className={styles.password}>
                <input type="password" />
            </div>
            <button className={styles.btn} onClick={loginClick}> 登陆 </button>
        </div>
    )
}

export default observer(Login);