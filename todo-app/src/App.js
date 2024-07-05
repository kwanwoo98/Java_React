<<<<<<< HEAD

import { useReducer, useState } from 'react';
=======
import { useReducer, useRef, useState } from 'react';
>>>>>>> 6628a8a4fc4f49e495e27f9e1eb29df574b210a4
import './App.css';
import Header from './component/Header';
import TodoEditor from './component/TodoEditor';
import TodoList from './component/TodoList';
<<<<<<< HEAD
import { useRef } from 'react';

const mockTodo= [
  {id:0, isDone:false, content:"스프링공부", createdDate:new Date().getTime(),},
  {id:1, isDone:false, content:"파이썬공부", createdDate:new Date().getTime(),},
  {id:2, isDone:false, content:"자바공부", createdDate:new Date().getTime(),},
]

function reducer(state, action){
  switch(action.type){
    case "CREATE" : {
      return [action.newItem, ...state];
    }
    case "UPDATE" : {
      return state.map((it) => 
          it.id === action.targetId?{...it, isDone:!it.isDone}:it
          )
    }
    case "DELETE" : {
      return state.filter((it)=>
      it.id !== action.targetId)
    }
    default :
=======

const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: "많은 유저분들이 기다리는 브레이커!",
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "언제나오나요??",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "다음주",
    createdDate: new Date().getTime(),
  },
];

function reducer(state, action){
  switch(action.type){
    case "CREATE":{
      return [action.newItem, ...state];
    }
    case "UPDATE":{
      return state.map((it)=>
          it.id===action.targetId? {...it, isDone:!it.isDone}:it
      );
    }
    case "DELETE":{
      return state.filter((it)=>it.id !== action.targetId);
    }
    default:
>>>>>>> 6628a8a4fc4f49e495e27f9e1eb29df574b210a4
      return state;
  }
  return state;
}

function App() {
<<<<<<< HEAD
  const [todo, dispatch] = useReducer(reducer, mockTodo);
  const idRef = useRef(3);
  // const [todo, setTodo] = useState(mockTodo);

  const onCreate = (content) => {
    dispatch({
      type : "CREATE",
      newItem:{
       id: idRef.current,
       content,
       isDone: false,
       createdDate: new Date().getTime(),
      }
    })
    // const newItem = {
    //   id: idRef.current,
    //   content,
    //   isDone: false,
    //   createdDate: new Date().getTime(),
    // };
    // setTodo([newItem, ...todo]);
    idRef.current += 1;
=======
  const [todo, dispatch]=useReducer(reducer,mockTodo);
  const idRef = useRef(3);
  //const [todo, setTodo] = useState(mockTodo);

  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      newItem:{
        id: idRef.current,
        content,
        isDone: false,
        createdDate: new Date().getTime(),
      }
    });
    idRef.current += 1
>>>>>>> 6628a8a4fc4f49e495e27f9e1eb29df574b210a4
  };

  const onUpdate = (targetId) => {
    dispatch({
      type:"UPDATE",
      targetId,
    });
<<<<<<< HEAD
    // setTodo(
    //   todo.map((it) => {
    //     if (it.id === targetId) {
    //       return {
    //         ...it,
    //         isDone: !it.isDone,
    //       };
    //     } else {
    //       return it;
    //     }
    //   })
    // );
=======
>>>>>>> 6628a8a4fc4f49e495e27f9e1eb29df574b210a4
  };
  const onDelete = (targetId) => {
    dispatch({
      type:"DELETE",
      targetId,
    })
<<<<<<< HEAD
  //  setTodo(todo.filter((it) => it.id !== targetId));
=======
>>>>>>> 6628a8a4fc4f49e495e27f9e1eb29df574b210a4
  };
  return (
    <div className="App">
      {/* <div>Header</div> */}
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
