<<<<<<< HEAD
import React from "react";
import "./Header.css";

const Header=() =>{
    console.log("헤더 호출")
=======
import "./Header.css";
const Header=() =>{
>>>>>>> 6628a8a4fc4f49e495e27f9e1eb29df574b210a4
    return (
    <div className="Header">
        <h3>오늘은 📆 </h3>
        <h1>{new Date().toDateString()}</h1>
    </div>
    )
}
<<<<<<< HEAD
export default React.memo(Header);
=======
export default Header
>>>>>>> 6628a8a4fc4f49e495e27f9e1eb29df574b210a4
