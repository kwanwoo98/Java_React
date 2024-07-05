import React from "react";

function FuncWelcome(props){
    return (
        <h1>ㅎㅇ, {props.name}</h1>
    );
}

function PropsEx(props){
    return (
    <div>
        <FuncWelcome name="소플"/>
        <FuncWelcome name="대재학"/>
        <FuncWelcome name="빛강선"/>
        <FuncWelcome name="둠강선"/>
    </div>
    );
}
export default PropsEx;