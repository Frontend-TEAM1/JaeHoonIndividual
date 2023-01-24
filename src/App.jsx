import React from "react";
import './App.css';
import {useState} from 'react'   

function App() {
  const [inputvalue,setinputvalue]=useState('');
  const [todoList,setTodoList]=useState([]);
  const addItem=()=>{
    setTodoList([...todoList,inputvalue])
  }
  return (
    <main>
      <input value={inputvalue}  type="text" 
      onChange={(event)=>setinputvalue(event.target.value)}/>

      <button onClick={addItem}>추가</button>

      <todoBoard todoList={todoList}/>
    </main>
  );
}

export default App;
