import React from 'react';
import './my-watch-list.scss';
import TodoList from "../../components/TodoList/TodoList";
import TodoAdd from "../../components/TodoAdd/TodoAdd";
import TodoSearch from "../../components/TodoSearch/TodoSearch";
import Title from "../../components/Title/Title";

const MyWatchList = () => {
    return (
        <section className='my-watch'>
            <div className='my-watch--container'>
                <Title content='My watch list' />
                <TodoSearch />
                <TodoAdd />
                <TodoList />
            </div>
        </section>
    );
};

export default MyWatchList;