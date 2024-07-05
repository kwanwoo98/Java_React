<<<<<<< HEAD
import React, { useEffect, useReducer, useState } from "react";

function reducer(state, action){
    switch(action.type){
        case 'INCREMENT': return {value : state.value +1};
        case 'DECREMENT': return {value : state.value -1};
        default : return state;
    }
}

function Counter(props){
    const [state, dispatch]=useReducer(reducer, {value :0})
    return(
        <div>
            <p>현재 카운터 값은 <b>{state.value}</b>입니다.</p>
            <button onClick={()=>dispatch({type: 'INCREMENT'})}>+1</button>
            <button onClick={()=>dispatch({type: 'DECREMENT'})}>-1</button>
        </div>
    );

    // var count = 0;

    // const [count, setCount]=useState(0);

    // useEffect(()=>{
    //     document.title = `총 ${count}번 클릭했습니다.`;
    // });

    // return (
    //     <div>
    //         <p>총 {count}번 클릭했습니다.</p>
    //         <button onClick={() => setCount(count + 1)}>클릭
    //         </button>
    //     </div>
    // );
}

export default Counter;
=======
import React, { useState, useEffect, useReducer } from "react";

function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT': return { value: state.value + 1 };
        case 'DECREMENT': return { value: state.value - 1 };
        default: return state;
    }
}
function Counter(props) {
    const [state, dispatch] = useReducer(reducer, { value: 0 })

    return (
        <div>
            <p>현재 카운터 값은<b>{state.value}</b>입니다.</p>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button> 
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
        </div>
    );

}    
export default Counter;



>>>>>>> 6628a8a4fc4f49e495e27f9e1eb29df574b210a4
