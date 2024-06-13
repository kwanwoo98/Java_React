import React, { useState } from "react";

function BoardItemList(props) {
    const [boards, setBoards] = useState([
        { id: 1, name: '대재학', title: '브레이커', content: '다음 주' },
        { id: 1, name: '빛광선', title: '로아온', content: '매출의 17%를 포기하겠습니다' },
    ]);

    const [nextId, setNextId] = useState(3);
    const [inputName, setInputName] = useState('');
    const [inputTitle, setInputTitle] = useState('');
    const [inputContent, setInputContent] = useState('');
    
    const onChangeName = e => setInputName(e.target.value)
    const onChangeTitle = e => setInputTitle(e.target.value)
    const onChangeContent = e => setInputContent(e.target.value)

    const boardList = boards.map(board =>
        <ul key={board.id} onDoubleClick={() => onRemove(board.id)}>
            <li>name: {board.name}</li>
            <li>title: {board.title}</li>
            <li>content: {board.content}</li><br />
        </ul>
    )

    const onClick = () => {
        const nextBoard = boards.concat({
            id: nextId,
            name: inputName,
            title: inputTitle,
            content: inputContent,
        });
        setNextId(nextId + 1);
        setBoards(nextBoard);
        setInputName('');
        setInputTitle('');
        setInputContent('');
    }

    // 데이터 제거부분
    const onRemove = id => {
        const nextBoard = boards.filter(board => board.id != id);
        setBoards(nextBoard);
    };

    return (<>
        <div>name   <input value={inputName} onChange={onChangeName} /></div>
        <div>title   <input value={inputTitle} onChange={onChangeTitle} /></div>
        <div>content   <input value={inputContent} onChange={onChangeContent} /></div>
        <button onClick={onClick}>추가</button>
        <ul>{boardList}</ul>
    </>)
}

export default BoardItemList;