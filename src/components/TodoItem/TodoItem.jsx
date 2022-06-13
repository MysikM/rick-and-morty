import React from 'react';
import './todo-item.scss';
import {IoTrashOutline} from "react-icons/io5";

const TodoItem = () => {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <span>eat pizza</span>
            <IoTrashOutline />
        </li>
    );
};

export default TodoItem;