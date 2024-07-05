import React, { useState } from "react";
<<<<<<< HEAD
import ToolBar from "./ToolBar";

function LandingPage(props){
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const onClickLogin = () => {
        setIsLoggedIn(true);
    };
    const onClickLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <div>
            <ToolBar 
            isLoggedIn={isLoggedIn}
            onClickLogin={onClickLogin}
            onClickLogout={onClickLogout}
            />
            <div style={{ padding:16 }}>...</div>
=======
import Toolbar from "./ToolBar";

function LandingPage(props){
    const [isLoggedIn, setIsLoggedIn]=useState(false);
    const onClickLogin = () => {
        setIsLoggedIn(true);
    }
    const onClickLogout = () => {
        setIsLoggedIn(false);
    }

    return(
        <div>
            <Toolbar isLoggedIn={isLoggedIn}
            onClickLogin={onClickLogin}
            onClickLogout={onClickLogout} />
            <div style={{padding : 16}}>집에가고싶다</div>
>>>>>>> 6628a8a4fc4f49e495e27f9e1eb29df574b210a4
        </div>
    )
}
export default LandingPage;