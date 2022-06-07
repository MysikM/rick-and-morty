import React from 'react';
import './not-found.scss';
import Title from "../../components/Title/Title";

const NotFound = () => {
    return (
        <section className='not-found'>
            <Title content='404 - Sorry, my friend of horror, but this page could not be found!' />
        </section>
    );
};

export default NotFound;