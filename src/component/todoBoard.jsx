import React from "react";
import '../App.css';
import todoItem from './todoItem';

const todoBoard = (props)=>{
    return(
        <div>
            <h1> Todo List </h1>
            {props.todoList.map((item)=><todoItem item={item}/>)}
            <todoItem/>

        </div>
    );
}
export default todoBoard;