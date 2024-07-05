import React, { useState } from "react";

<<<<<<< HEAD
function IterationSample(props){
    const [names, setNames] = useState ([
        {id : 1, text : '사과'},
        {id : 2, text : '수박'},
        {id : 3, text : '포도'},
        {id : 4, text : '참외'}
=======
function IterationSample(props) {
    const [names, setNames] = useState([
        { id: 1, text: '구름' },
        { id: 2, text: '많음' },
        { id: 3, text: '바람' },
        { id: 4, text: '추움' }
>>>>>>> 6628a8a4fc4f49e495e27f9e1eb29df574b210a4
    ]);

    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);

    const onChange = e => setInputText(e.target.value)
    const onClick = () => {
        const nextNames = names.concat({
<<<<<<< HEAD
            id : nextId , 
            text : inputText
        });
        setNextId(nextId+1);
=======
            id: nextId,
            text: inputText
        });
        setNextId(nextId + 1);
>>>>>>> 6628a8a4fc4f49e495e27f9e1eb29df574b210a4
        setNames(nextNames);
        setInputText('');
    }

    // 데이터 제거부분
<<<<<<< HEAD
    const onRemove = id =>{
        const nextNames = names.filter(name => name.id !== id );
        setNames(nextNames)
    };

    const nameList = names.map( name => <li id={name.id} onDoubleClick={() => onRemove(name.id)}>{name.text}</li>)
    return (<>
    <input value = {inputText} onChange={onChange} />
    <button onClick={onClick}>추가</button>
    <ul>{nameList}</ul>
=======
    const onRemove = id => {
        const nextNames = names.filter(name => name.id != id);
        setNames(nextNames);
        // const nextNames = names.filter(name => name.id !== id );
        // setNames(nextNames)
    };

    const nameList = names.map(name =>
        <li id={name.id} onDoubleClick={() => onRemove(name.id)}>{name.text}</li>
    )

    return (<>
        <input value={inputText} onChange={onChange} />
        <button onClick={onClick}>추가</button>
        <ul>{nameList}</ul>
>>>>>>> 6628a8a4fc4f49e495e27f9e1eb29df574b210a4
    </>)
}

export default IterationSample;