import './App.css';
import {useState} from 'react';

function App() {
  let [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <div className='CountBox'>
        <h2>현재 카운트:</h2>
        <h1>{count}</h1>

        <div className='EvenOdd'>
          <p>현재 카운트는</p>
          {
            (count%2) ? <p>홀수</p> : <p>짝수</p>
          }
        <p>입니다</p>
        </div>
      </div>

      <button onClick={()=>{
        setCount(count-1);
      }}>-1</button>
      <button onClick={()=>{
        setCount(count-10);
      }}>-10</button>
      <button onClick={()=>{
        setCount(count-100);
      }}>-100</button>
      <button onClick={()=>{
        setCount(count+1);
      }}>+1</button>
      <button onClick={()=>{
        setCount(count+10);
      }}>+10</button>
      <button onClick={()=>{
        setCount(count+100);
      }}>+100</button>
    </div>
  );
}

export default App;
