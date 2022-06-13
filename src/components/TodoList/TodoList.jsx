import React from 'react';
import './todo-list.scss';
import TodoItem from "../TodoItem/TodoItem";
import {useSelector} from "react-redux";

const TodoList = () => {
    const {todos} = useSelector(state => state.todos);
    console.log(todos);
    return (
            <ul className='todo--list'>
                {
                    todos.map(el => <TodoItem key={el.id} {...el} />)
                }
            </ul>
    );
};

export default TodoList;