import React, { useEffect, useState } from "react";
<<<<<<< HEAD
import useCounter from "./useCounter";

const MAX_CAPACITY=10;

function Accommodate(props){
    const [isFull, setIsFull]=useState(false);
    const [count, increaseCount, decreaseCount]=useCounter(0)

    useEffect(() => {
        console.log("================");
        console.log("useEffect() is called");
        console.log(`isFull : ${isFull}`);
=======
import useCounter from "./useCounter"; // 경로가 올바른지 확인하세요

const MAX_CAPACITY = 10;

function Accommodate(props) {
    const [isFull, setIsFull] = useState(false);
    const [count, increaseCount, decreaseCount] = useCounter(0);

    useEffect(() => {
        console.log("=== ");
        console.log("useEffect() is called.");
        console.log(`isFull: ${isFull}`);
>>>>>>> 6628a8a4fc4f49e495e27f9e1eb29df574b210a4
    });

    useEffect(() => {
        setIsFull(count >= MAX_CAPACITY);
<<<<<<< HEAD
        console.log(`Current count value:${count}`);
    },[count]);

    return(
        <div style={{padding:16}}>
            <p>{`총 ${count}명 수용했습니다.`}</p>

            <button onClick={increaseCount} disabled={isFull}>입장</button>
            <button onClick={decreaseCount}>퇴장</button>
            {isFull && <p style={{color: "red"}}>정원이 가득찼습니다.</p>}
        </div>
    )
}
export default Accommodate;
=======
        console.log(`Current count value: ${count}`);
    }, [count]);

    return (
        <div style={{ padding: 16 }}>
            <p>{`총 ${count}명 수용.`}</p>
            <button onClick={increaseCount} disabled={isFull}>입장</button>
            <button onClick={decreaseCount}>퇴장</button>
            {isFull && <p style={{ color: "red" }}>정원이 가득참</p>}
        </div>
    );
}

export default Accommodate;
>>>>>>> 6628a8a4fc4f49e495e27f9e1eb29df574b210a4
