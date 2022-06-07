import React from 'react';
import Title from "../Title/Title";
import './selects.scss'

const Selects = () => {
    return (
        <section className='selects'>
            <Title content={`0 characters`} />
            <div className='selects--container'>
              empty
            </div>
        </section>
    );
};

export default Selects;