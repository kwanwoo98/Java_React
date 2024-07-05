<<<<<<< HEAD
import React, { useState } from "react";

function Say(props){
    const [message, setMessage]=useState('');
    const onClickEnter=() =>setMessage('안녕하세요!');
    const onClickLeave=() =>setMessage('안녕히 가세요!'); 
=======
import React,{useState} from "react";

function Say(props){
    const [message, setMessage]=useState('');
    const onClickEnter=() => setMessage('ㅎㅇㅇ');
    const onClickLeave=() => setMessage('ㅂㅇㅇ');
>>>>>>> 6628a8a4fc4f49e495e27f9e1eb29df574b210a4
    const [color, setColor]=useState('black');

    return(
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1 style={{color}}>{message}</h1>
        </div>
    )
}
export default Say;