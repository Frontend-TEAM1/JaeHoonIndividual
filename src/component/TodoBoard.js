import React from "react";
import '../App.css';
import TodoItem from './TodoItem';

const TodoBoard = (props)=>{
    return(
        <div className="todo-list">
            <h1> Todo List </h1>
            {props.todoList.map((item)=><TodoItem item={item}/>)}
            <TodoItem/>

        </div>
    );
};
export default TodoBoard;