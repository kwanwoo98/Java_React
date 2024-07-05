<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostWritePage from './component/page/PostWritePage';
import PostViewPage from './component/page/PostViewPage';
import MainPage from './component/page/MainPage';
import { useState } from 'react';
=======
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import MainPage from "./commponent/page/MainPage";
import PostWritePage from "./commponent/page/PostWritePage";
import PostViewPage from './commponent/page/PostViewPage';

>>>>>>> 6628a8a4fc4f49e495e27f9e1eb29df574b210a4

const MainTitleText = styled.p`
  font-size : 24px;
  font-weight : bold;
<<<<<<< HEAD
  text-align : center; `;


const initialPosts = [
  {
    id : 0,
    isDone : false,
    title : "리액트 과제 초기 데이터 제목 1",
    content : "리액트 과제 초기 데이터 내용 1",
    createdDate : new Date().getTime(),
  },
  {
    id : 1,
    isDone : false,
    title : "리액트 과제 초기 데이터 제목 2",
    content : "리액트 과제 초기 데이터 내용 2",
    createdDate : new Date().getTime(),
  },
  {
    id : 2,
    isDone : false,
    title : "리액트 과제 초기 데이터 제목 3",
    content : "리액트 과제 초기 데이터 내용 3",
    "comments": [
      {
        "id": 11,
        "content": "댓글 달기 테스트 1"
      },
      {
        "id": 12,
        "content": "댓글 달기 테스트 2"
      },
    ],
    createdDate : new Date().getTime(),
=======
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
>>>>>>> 6628a8a4fc4f49e495e27f9e1eb29df574b210a4
  },
];

function App() {
<<<<<<< HEAD
  const [posts, setPosts] = useState(initialPosts);

  const addPost = (title, content) => {
    const newPost = {
      id : posts.length,
      title,
      content,
      createdDate : new Date().getTime(),
      comments : [],
    };
    setPosts([...posts, newPost]);
  };

  const addComment = (postId, commentContent) => {
    setPosts(posts.map( post => post.id === postId
      ? { ...post, comments : [...( post.comments || [] ), { id : Date.now(), content : commentContent }] }
      : post
=======
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
>>>>>>> 6628a8a4fc4f49e495e27f9e1eb29df574b210a4
    ));
  };

  const updatePost = (postId, updatedTitle, updatedContent) => {
<<<<<<< HEAD
    setPosts(posts.map(post =>
      post.id === postId
        ? { ...post, title : updatedTitle, content : updatedContent }
        : post
    ));
  };
  const deletePost = (postId) => {
    setPosts(posts.filter(post => post.id !== postId));
=======
    setTodos(todos.map(todo =>
      todo.id === postId
        ? { ...todo, title: updatedTitle, content: updatedContent }
        : todo
    ));
  };

  const deletePost = (postId) => {
    setTodos(todos.filter(todo => todo.id !== postId));
>>>>>>> 6628a8a4fc4f49e495e27f9e1eb29df574b210a4
  };

  return (
    <BrowserRouter>
<<<<<<< HEAD
      <MainTitleText> 소플의 미니 블로그</MainTitleText>
      <Routes>
        <Route index element = {<MainPage posts = {posts}/>} />
        <Route path="post-write" element = {<PostWritePage addPost = {addPost}/>} />
        <Route path="post/:postId"
          element = {<PostViewPage posts = {posts}
            addComment = {addComment}
            updatePost = {updatePost}
            deletePost = {deletePost} />} />
=======
      <MainTitleText>소플의 미니 블로그</MainTitleText>
      <Routes>
        <Route index element={<MainPage todos={todos} />} />
        <Route path="post-write" element={<PostWritePage addPost={addPost} />} />
        <Route path="post/:postId" element={<PostViewPage todos={todos} addComment={addComment} updatePost={updatePost} deletePost={deletePost} />} />
>>>>>>> 6628a8a4fc4f49e495e27f9e1eb29df574b210a4
      </Routes>
    </BrowserRouter>
  );
}

export default App;
