import React from 'react';
import './title.scss';

const Title = ({content}) => {
    return (
        <h2 className='title'>{content}</h2>
    );
};

export default Title;