import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from './chapter_03/Library';
import StudentList from './chapter_03/StudentList';
import ConfirmDialog from './chapter_04/ConfirmDialog';
import Clock from './chapter_04/Clock';
import PropsEx from './chapter_05/PropsEx';
import Comment from './chapter_05/Comment';
import CommentList from './chapter_05/CommentList';
import BoardList from './chapter_05/BoardList';
import Counter from './chapter07/Counter';
import Info from './chapter07/Info';
import Average from './chapter07/Average';
import Accommodate from './chapter07/Accommodate';
import Say from './chapter08/Say';
import Toggle from './chapter08/Toggle';
import ConfirmButton from './chapter08/ConfirmButton';
import Greeting from './chapter09/Greeting';
import LoginControl from './chapter09/LoginControl';
import MainPage from './chapter09/MainPage';
import LandingPage from './chapter09/LandingPage';
import NumberList from './chapter10/NumberList';
import IterationSample from './chapter10/IterationSample';
import BoardItemList from './chapter10/BoardItemList';
import NameForm from './chapter11/NameForm';
import RequestForm from './chapter11/RequiestForm';
import TestForm from './chapter11/TestForm';
import Calculator from './chapter12/Calculator';
import TemperatureInput from './chapter12/TemperatureInput';
import ProfileCard from './chapter13/ProfileCard';
import DarkOrLight from './chapter14/DarkOrLight';
import ThemeTest from './chapter14/ThemeTest';
import MainPage1 from './chapter15/MainPage1';
import Sample1 from './chapter15/Sample1';
import Blocks from './chapter15/Blocks';

const root = ReactDOM.createRoot(document.getElementById('root'));

// setInterval( () => {
  root.render(
    <React.StrictMode>
      {/* <App /> */}
      {/* <Library /> */}
      {/* <StudentList /> */}
      {/* <ConfirmDialog /> */}
      {/* <Clock /> */}
      {/* <PropsEx /> */}
      {/* <CommentList /> */}
      {/* <BoardList /> */}
      {/* <Counter/> */}
      {/* <Info/> */}
      {/* <Average/> */}
      {/* <Accommodate/> */}
      {/* <Say/> */}
      {/* <Toggle/> */}
      {/* <ConfirmButton/> */}
      {/* <Greeting/> */}
      {/* <LoginControl/> */}
      {/* <MainPage/> */}
      {/* <LandingPage/> */}
      {/* <NumberList/> */}
      {/* <IterationSample/> */}
      {/* <BoardItemList/> */}
      {/* <NameForm/> */}
      {/* <RequestForm/> */}
      {/* <TestForm/> */}
      {/* <Calculator/> */}
      {/* <TemperatureInput/> */}
      {/* <ProfileCard/> */}
      {/* <ThemeTest/> */}
      {/* <DarkOrLight/> */}
      {/* <MainPage1/> */}
      {/* <Sample1/> */}
      <Blocks/>
    </React.StrictMode>
  );
// },1000)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
