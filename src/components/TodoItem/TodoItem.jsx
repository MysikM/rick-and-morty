import React from 'react';
import './todo-item.scss';
import {IoTrashOutline} from "react-icons/io5";

const TodoItem = () => {
    return (
        <li className="list-group-item">
            <span>eat pizza</span>
            <IoTrashOutline />
        </li>
    );
};

export default TodoItem;