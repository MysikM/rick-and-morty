import React, {useEffect} from 'react';
import './todo-list.scss';
import TodoItem from "../TodoItem/TodoItem";
import {useDispatch, useSelector} from "react-redux";
import {TODO_LIST} from "../../data/data";
import {firstLoad} from "../../store/slices/todoSlice";

const TodoList = () => {
    const {todos, filterTodo} = useSelector(state => state.todos);
    const dispatch = useDispatch();

    useEffect(() => {
        if(localStorage.getItem(TODO_LIST)){
            dispatch(firstLoad(JSON.parse(localStorage.getItem(TODO_LIST))));
            console.log(JSON.parse(localStorage.getItem(TODO_LIST)));
        }
    }, []);

    useEffect(() => {
        if(todos.length !== 0) {
            localStorage.setItem(TODO_LIST, JSON.stringify(todos));
        }
    }, [filterTodo]);

    return (
            <ul className='todo--list'>
                {
                    todos.map(el => <TodoItem key={el.id} {...el} />)
                }
            </ul>
    );
};

export default TodoList;