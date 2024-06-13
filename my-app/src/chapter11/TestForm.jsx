import React, { useState } from "react";

function TestForm(props){
    const [infos, setInfos] = useState([]);
    const [nextId, setNextId] = useState(1);
    const [inputName, setInputName] = useState('');
    const [inputGender, setInputGender] = useState('');

    const onChangeName = e => setInputName(e.target.value)
    const onChangeGender = e => setInputGender(e.target.value);

    const onClick = () => {
        const nextInfo = infos.concat({
            id: nextId,
            name: inputName,
            gender: inputGender,

        });
        setNextId(nextId + 1);
        setInfos(nextInfo);
        setInputName('');
        setInputGender('');
    }
    
    const onRemove = id => {
        const nextInfo = infos.filter(Info => Info.id !== id);
        setInfos(nextInfo);
    };

    const infoList = infos.map(info =>
        <ul key={info.id} onDoubleClick={() => onRemove(info.id)}>
            <li>name: {info.name}</li>
            <li>gender: {info.gender}</li>
            <br />
        </ul>
    );

    return (
        <>
            <div>
                name: <input value={inputName} onChange={onChangeName} />
            </div>
            <div>
                gender:
                <input type="radio" value="남성" checked={inputGender === '남성'} onChange={onChangeGender} /> 남성
                <input type="radio" value="여성" checked={inputGender === '여성'} onChange={onChangeGender} /> 여성
            </div>
            <button onClick={onClick}>제출</button>
            <ul>{infoList}</ul>
        </>
    );
}
export default TestForm;