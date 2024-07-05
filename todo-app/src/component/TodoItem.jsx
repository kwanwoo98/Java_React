<<<<<<< HEAD
import React from "react";
import "./TodoItem.css"

const TodoItem=({ id, content, isDone, createdDate, onUpdate, onDelete })=>{
    console.log(`${id} TodoItem 업데이트`);
=======
import "./TodoItem.css"

const TodoItem=({ id, content, isDone, createdDate, onUpdate, onDelete })=>{
>>>>>>> 6628a8a4fc4f49e495e27f9e1eb29df574b210a4
    const onChangeCheckbox = () => { 
        onUpdate(id);
    };

    const onClickDelete = () => {
        onDelete(id);
    };
    return(
        <div className="TodoItem">
            <div className="checkbox_col">
                <input onChange={onChangeCheckbox} checked={isDone} type="checkbox" />
            </div>
            <div className="title_col">{content}</div>
            
            <div className="date_col">
                {new Date(createdDate).toLocaleDateString()}
            </div>
            <div className="btn_col">
                <button onClick={onClickDelete}>삭제</button>
            </div>
        </div>
    )
}
<<<<<<< HEAD
export default React.memo(TodoItem);
=======
export default TodoItem;
>>>>>>> 6628a8a4fc4f49e495e27f9e1eb29df574b210a4
