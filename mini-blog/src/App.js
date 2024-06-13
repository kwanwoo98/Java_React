import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import MainPage from "./commponent/page/MainPage";
import PostWritePage from "./commponent/page/PostWritePage";
import PostViewPage from './commponent/page/PostViewPage';


const MainTitleText = styled.p`
  font-size : 24px;
  font-weight : bold;
  text-align : center;
`;

const initialTodos = [
  {
    id: 0,
    title: "많은 유저분들이 기다리는 브레이커!",
    content: "많은 유저분들이 기다리는 브레이커!",
  },
  {
    id: 1,
    title: "언제나오나요??",
    content: "언제나오나요??",
  },
  {
    id: 2,
    title: "다음주",
    content: "다음주",
    "comments": [
      {
        "id": 11,
        "content": "대재학!!!대재학!!!대재학!!"
      },
      {
        "id": 12,
        "content": "수직군단장님!!!"
      },
    ],
  },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);

  const addPost = (title, content) => {
    const newPost = {
      id: todos.length,
      title,
      content,
      createdDate: new Date().getTime(),
      comments: [],
    };
    setTodos([...todos, newPost]);
  };

  const addComment = (postId, commentContent) => {
    setTodos(todos.map(todo =>
      todo.id === postId
        ? { ...todo, comments: [...(todo.comments || []), { id: Date.now(), content: commentContent }] }
        : todo
    ));
  };

  const updatePost = (postId, updatedTitle, updatedContent) => {
    setTodos(todos.map(todo =>
      todo.id === postId
        ? { ...todo, title: updatedTitle, content: updatedContent }
        : todo
    ));
  };

  const deletePost = (postId) => {
    setTodos(todos.filter(todo => todo.id !== postId));
  };

  return (
    <BrowserRouter>
      <MainTitleText>소플의 미니 블로그</MainTitleText>
      <Routes>
        <Route index element={<MainPage todos={todos} />} />
        <Route path="post-write" element={<PostWritePage addPost={addPost} />} />
        <Route path="post/:postId" element={<PostViewPage todos={todos} addComment={addComment} updatePost={updatePost} deletePost={deletePost} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
