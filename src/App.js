import React from "react";
import './App.css';
import {useState} from 'react'   
import TodoBoard from "./component/TodoBoard";

function App() {
  const [inputvalue,setinputvalue]=useState('');
  const [todoList,setTodoList]=useState([]);
  const addItem=()=>{
    setTodoList([...todoList,inputvalue])
  }
  
  return (
    <main id="main" >
      <input
       value={inputvalue}
       type="text" 
       onChange={(event)=>setinputvalue(event.target.value)
      }/>

      <button onClick={addItem}>추가</button>

      <TodoBoard todoList={todoList}/>
    </main>
  );
}

export default App;
