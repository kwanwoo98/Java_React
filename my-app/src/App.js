import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Info from './chapter07/Info';

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="App">
      <div>
        <button onClick={()=>setVisible(!visible)}>
          {visible ? "숨김" : "보임"}
        </button>
        <hr/>
        {visible && <info/>}
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
