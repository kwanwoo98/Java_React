import React from "react";

function BoilingVerdict(props){
    if (props.celsius >= 100) {
        return <p>물이 끓음ㅇㅇ</p>;
    }
    return <p>물 안끓음ㅇㅇ</p>;
}

export default BoilingVerdict;