import React from 'react';
import Title from "../Title/Title";
import './selects.scss'
import {useSelector} from "react-redux";

const Selects = () => {
    const { count } = useSelector(state => state.character);
    return (
        <section className='selects'>
            <Title content={`${count || 0} characters`} />
            <div className='selects--container'>
              empty
            </div>
        </section>
    );
};

export default Selects;