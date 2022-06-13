import React, {useState} from 'react';
import './todo-search.scss';
import {useDispatch} from "react-redux";
import {sortTodo} from "../../store/slices/todoSlice";

const TodoSearch = () => {
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();

    const handleSearch = (e) => {
        setSearch(e.target.value);
        dispatch(sortTodo({search: e.target.value}))
    };

    return (
        <input
            placeholder='Search'
            value={search}
            onChange={handleSearch}
            className='todo--search'
        />
    );
};

export default TodoSearch;