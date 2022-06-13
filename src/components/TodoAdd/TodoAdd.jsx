import React, {useState} from 'react';
import './TodoAdd.scss';

const TodoAdd = () => {
    const [newItem, setNewItem] = useState('');

    const handleInput = (e) => {
        setNewItem(e.target.value);
    };

    const createNewItem = () => {
        console.log('click');
    };

    return (
        <div className='todo--add'>
            <input
                className='todo--form-add'
                type="text"
                value={newItem}
                onChange={handleInput}
                placeholder='Add New Item'
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