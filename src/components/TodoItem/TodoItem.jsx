import React from 'react';
import './todo-item.scss';
import {IoTrashOutline} from "react-icons/io5";
import {useDispatch} from "react-redux";
import {changeStatusTodo, removeTodo} from "../../store/slices/todoSlice";

const TodoItem = ({id, content, status}) => {

    const dispatch = useDispatch();

    const changeStatus = () => {
        dispatch(changeStatusTodo({id}));
    };

    const deleteItem = () => {
        dispatch(removeTodo({id}));
    }

    return (
        <li className={`list-group-item ${status && 'list-group-item__active'}`} onClick={changeStatus}>
            <span>{content}</span>
            <IoTrashOutline onClick={deleteItem} />
        </li>
    );
};

export default TodoItem;