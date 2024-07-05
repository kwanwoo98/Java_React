
import { useState } from 'react';
import './App.css';
import axios from 'axios';
<<<<<<< HEAD
import NewsList from './components/NewsList';
import Categories from './components/Categories';
import { useCallback } from 'react';

function App() {
  const [category, setCategory]=useState("all");
  const onSelect = useCallback(category => setCategory(category),[]);
  // const [data, setData] = useState(null);
  // const onClick= async() =>{
  //   try{
  //     const response = await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=0a73df22dd97449da35c324fc4f2c139');
  //     setData(response.data);
  //   } catch(e) {
  //     console.error(e);
  //   }
  // }
  return (
    <>
      <Categories category={category} onSelect={onSelect}/>
      <NewsList category={category} />
    </>
  )
  //  (
  //   <div>
  //     <div>
  //       <button onClick={onClick}>불러오기</button>
  //     </div>
  //     {data && <textarea rows={50} cols={200} value={JSON.stringify(data, null, 2)} />}
  //   </div>
  // );
=======
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
>>>>>>> 6628a8a4fc4f49e495e27f9e1eb29df574b210a4
}

export default App;
