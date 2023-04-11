import React from "react";
import useUtilsHooks from "../../hooks/useUtilsHook";
import { createWin } from "../../windows/actions";
const Home = () => {
    const navigation = useUtilsHooks();
    const btnClick = () => {
        createWin({
            label: 'about',
            title: '关于我们',
            url: '/about',
            width: 600,
            height: 800,
            resizable: true,
            decorations: true,
        })
    }
    return (<div>
        这个是Home
        <button onClick={btnClick}>打开关于我们</button>
    </div>)
}

export default Home;