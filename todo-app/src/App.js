import { useReducer, useRef, useState } from 'react';
import './App.css';
import Header from './component/Header';
import TodoEditor from './component/TodoEditor';
import TodoList from './component/TodoList';

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
      return state;
  }
  return state;
}

function App() {
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
  };

  const onUpdate = (targetId) => {
    dispatch({
      type:"UPDATE",
      targetId,
    });
  };
  const onDelete = (targetId) => {
    dispatch({
      type:"DELETE",
      targetId,
    })
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
