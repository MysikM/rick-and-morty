import React, {useState} from 'react';
import './TodoAdd.scss';
import {useDispatch} from "react-redux";
import {addTodo} from "../../store/slices/todoSlice";

const TodoAdd = () => {
    const [newItem, setNewItem] = useState('');
    const dispatch = useDispatch();

    const createNewItem = () => {
        if(newItem.trim() !== '') {
            setNewItem('');
            dispatch(addTodo({
                id: new Date().getTime(),
                content: newItem.trim(),
                status: false,
            }));
        }
    };

    const handleInput = (e) => {
        setNewItem(e.target.value);
    };

    const handleKey = (e) => {
        if(e.keyCode === 13) {
            createNewItem();
        }
    }

    return (
        <div className='todo--add'>
            <input
                className='todo--form-add'
                type="text"
                value={newItem}
                onChange={handleInput}
                placeholder='Add New Item'
                onKeyDown={handleKey}
            />
            <button
                className='todo--btn-add'
                onClick={createNewItem}
            >
                New Add
            </button>
        </div>
    );
};

export default TodoAdd;