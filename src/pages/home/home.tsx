import React from "react";
import useUtilsHooks from "../../hooks/useUtilsHook";
const Home = () => {
    const navigation = useUtilsHooks();
    const loginClick = () => {
        navigation('')
        
    }

    return (<div>
        这个是Home
    </div>)
}

export default Home;