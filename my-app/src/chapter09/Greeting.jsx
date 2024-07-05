<<<<<<< HEAD
import React from "react";

function UserGreeting(props){
    return <h1>오셨군용</h1>
}

function GuestGreeting(props){
    return <h1> 회원가입을 해주세용</h1>
}

// 조건부 렌더링 알아보기 > 조건에 따라서 렌더링이 달라지는 것
// 조건문의 결과는 true or false
function Greeting(props){ // props를 전달 안하면 isLoggedIn 가 falsy이므로 GuestGreeting이 호출된다
    // Truthy : true는 아니지만 true로 여겨지는 값 / Falsy : false는 아니지만 false로 여겨지는 값
    const isLoggedIn=props.isLoggedIn;
    return isLoggedIn ? <UserGreeting /> : <GuestGreeting />
    // if(isLoggedIn){
    // return isLoggedIn && <UserGreeting />;
    // }

    // return <GuestGreeting />;
}

=======
import React, { useState } from "react";

function UserGreeting(props){
    return <h1>다시 오셨군요!</h1>
}

function GuestGreeting(props){
    return <h1>회원가입을 해주세요</h1>
}

function Greeting(props){
    const isLoggedIn=props.isLoggedIn;

    return isLoggedIn? <UserGreeting/>:<GuestGreeting/>

    // if(isLoggedIn){
    //     return <UserGreeting/>
    // }
    // return <GuestGreeting/>;
}
>>>>>>> 6628a8a4fc4f49e495e27f9e1eb29df574b210a4
export default Greeting;