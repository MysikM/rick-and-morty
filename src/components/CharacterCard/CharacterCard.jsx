import React from 'react';
import './character-card.scss';
import {useNavigate} from "react-router-dom";

const CharacterCard = (props) => {
    const {id ,name, status, species, gender, image} = props;
    const navigate = useNavigate();

    return (
        <>
            <article className='character' onClick={() => {navigate(`/characters/${id}`)}}>
                <img className='character--img' src={image} alt={name} />
                <div className='character--info'>
                    <h3 className='character--name'>{name}</h3>
                    <p className='character--description'>status: <span>{status}</span></p>
                    <p className='character--description'>species: <span>{species}</span></p>
                    <p className='character--description'>gender: <span>{gender}</span></p>
                </div>
            </article>
        </>);
};

export default CharacterCard;