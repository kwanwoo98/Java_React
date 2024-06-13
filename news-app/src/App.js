
import { useState } from 'react';
import './App.css';
import axios from 'axios';
import NewsList from './components/NewList';
import Categories from './components/Categories';
import { useCallback } from 'react';

// function App() {
//   const [data, setData] = useState(null);
//   const onClick= async() =>{
//     try{
//       const response = await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=92d0e15d378b42cdb4fdd1b504554569');
//       setData(response.data);
//     } catch(e) {
//       console.error(e);
//     }
//   }
//   return (
//     <div>
//       <div>
//         <button onClick={onClick}>불러오기</button>
//       </div>
//       {data && <textarea rows={50} cols={200} value={JSON.stringify(data, null, 2)} />}
//     </div>
//   );
// }
function App() {
  const [category, setCategory] = useState("all");
  const onSelect = useCallback(category => setCategory(category), []);
  return (
    <>
      <Categories cateogry={category} onSelect={onSelect} />
      <NewsList category={category} />
    </>
  )
}

export default App;
