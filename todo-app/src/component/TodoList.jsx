<<<<<<< HEAD
import React, { useMemo, useState } from "react";
=======
import { useState } from "react";
>>>>>>> 6628a8a4fc4f49e495e27f9e1eb29df574b210a4
import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList=({ todo, onUpdate, onDelete }) =>{
    const [search, setSearch] = useState(""); 
<<<<<<< HEAD
    const onChangeSearch = (e) => { //
=======
    const onChangeSearch = (e) => { // 
>>>>>>> 6628a8a4fc4f49e495e27f9e1eb29df574b210a4
        setSearch(e.target.value);
    };
    
    const getSearchResult = () => {
        return search === ""
          ? todo
          : todo.filter((it) =>
              it.content.toLowerCase().includes(search.toLowerCase())
            );
    };
<<<<<<< HEAD

    const analyzeTodo =useMemo( () => {
        console.log("analyzeTodo() 호출 ")
        const totalCount = todo.length;
        const doneCount = todo.filter((it) => it.isDone).length;
        const notDoneCount = totalCount-doneCount;
        return{
            totalCount, doneCount, notDoneCount
        };
    },[todo]);

    const {totalCount, doneCount, notDoneCount} = analyzeTodo;

    return(
        <div className="TodoList">
            <h4>Todo List 🔍</h4>
            <div>
                <div> 총 개수 : {totalCount} </div>
                <div> 완료 개수 : {doneCount} </div>
                <div> 미완료 개수 : {notDoneCount} </div>
            </div>
=======
    return(
        <div className="TodoList">
            <h4>Todo List 🔍</h4>
>>>>>>> 6628a8a4fc4f49e495e27f9e1eb29df574b210a4
            <input
                value={search} 
                onChange={onChangeSearch} 
                className="searchbar" placeholder="검색어를 입력하세요" />
            <div className="list_wrapper">
                {getSearchResult().map((it) => ( 
                    <TodoItem 
                        key={it.id} {...it} 
                        onUpdate={onUpdate}
                        onDelete={onDelete} />
                ))}
<<<<<<< HEAD
=======
                {/* {todo.map((it) => (
                    
                     <TodoItem key={it.id} {...it} />
                ))} */}
>>>>>>> 6628a8a4fc4f49e495e27f9e1eb29df574b210a4
            </div>
        </div>
    );
}
export default TodoList;