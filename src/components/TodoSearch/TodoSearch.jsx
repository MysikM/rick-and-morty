import React, {useState} from 'react';
import './todo-search.scss';

const TodoSearch = () => {
    const [search, setSearch] = useState('');

    const handleSearch = (e) => {
        setSearch(e.target.value);
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