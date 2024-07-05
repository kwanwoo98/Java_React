import React, { useState } from "react";

<<<<<<< HEAD
// 컴포넌트 렌더링 막기 : null 리턴

function WarningBanner(props){
    if(!props.warning){
        return null; // 렌더링 x
    }
    return(
        <div>경고!</div>
    );
=======
function WarningBanner(props){
    if(!props.warning){
        return null;
    }

    return(
        <div >경고!</div>
    )

>>>>>>> 6628a8a4fc4f49e495e27f9e1eb29df574b210a4
}

function MainPage(props){
    const [showWarning, setShowWarning] = useState(false);
<<<<<<< HEAD
=======

>>>>>>> 6628a8a4fc4f49e495e27f9e1eb29df574b210a4
    const handleToggleClick = () => {
        setShowWarning(prevShowWarning => !prevShowWarning);
    }

<<<<<<< HEAD
    return (
        <div>
            <WarningBanner warning={showWarning} />
            <button onClick={handleToggleClick} >
=======
    return(
        <div>
            <WarningBanner warning={showWarning}/>
            <button onClick={handleToggleClick}>
>>>>>>> 6628a8a4fc4f49e495e27f9e1eb29df574b210a4
                {showWarning ? '감추기' : '보이기'}
            </button>
        </div>
    );
}
<<<<<<< HEAD

=======
>>>>>>> 6628a8a4fc4f49e495e27f9e1eb29df574b210a4
export default MainPage;