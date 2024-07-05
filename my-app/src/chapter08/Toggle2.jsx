import React, { useState } from "react";

<<<<<<< HEAD
function Toggle2(props){
    const [isToggleOn, setIsToggleOn] = useState(true);

    //방법1. 함수 안에 함수로 정의
    function handleClick(){
        setIsToggleOn((isToggleOn) => !isToggleOn);
    }

    //방법2. arrow function을 사용하여 정의
    // const handleClick = () => {
    //     setIsToggleOn((isToggleOn) => !isToggleOn);
    // }
=======
function Toggle2(props) {
    const [isToggleOn, setIsToggleOn] = useState(true);

    function handleClick() {
        setIsToggleOn((isToggleOn) => !isToggleOn);
    }

    const handleClick = () => {
        setIsToggleOn((isToggleOn)=>!isToggleOn);
    }
>>>>>>> 6628a8a4fc4f49e495e27f9e1eb29df574b210a4

    return(
        <button onClick={handleClick}>
            {isToggleOn ? "켜짐" : "꺼짐"}
        </button>
    );
}
export default Toggle2;