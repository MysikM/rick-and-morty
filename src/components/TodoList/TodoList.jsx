import React from 'react';
import './todo-list.scss';
import TodoItem from "../TodoItem/TodoItem";

const TodoList = () => {
    return (
            <ul className='todo--list'>
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
            </ul>
    );
};

export default TodoList;