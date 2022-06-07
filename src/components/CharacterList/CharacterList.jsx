import React from 'react';
import './character-list.scss';
import CharacterCard from "../CharacterCard/CharacterCard";

const CharacterList = () => {
    return (
        <>
            <ul className='character-list'>
                    <CharacterCard  id={1} name='Test' status='Test' species='Test' gender='Test' image='https://raw.githubusercontent.com/Adalab/rick-y-morty/master/assets/img/8.jpeg' />
                    <CharacterCard  id={2} name='Test' status='Test' species='Test' gender='Test' image='https://raw.githubusercontent.com/Adalab/rick-y-morty/master/assets/img/8.jpeg' />
                    <CharacterCard  id={3} name='Test' status='Test' species='Test' gender='Test' image='https://raw.githubusercontent.com/Adalab/rick-y-morty/master/assets/img/8.jpeg' />
                    <CharacterCard  id={4} name='Test' status='Test' species='Test' gender='Test' image='https://raw.githubusercontent.com/Adalab/rick-y-morty/master/assets/img/8.jpeg' />
                    <CharacterCard  id={5} name='Test' status='Test' species='Test' gender='Test' image='https://raw.githubusercontent.com/Adalab/rick-y-morty/master/assets/img/8.jpeg' />
                    <CharacterCard  id={6} name='Test' status='Test' species='Test' gender='Test' image='https://raw.githubusercontent.com/Adalab/rick-y-morty/master/assets/img/8.jpeg' />
                    <CharacterCard  id={7} name='Test' status='Test' species='Test' gender='Test' image='https://raw.githubusercontent.com/Adalab/rick-y-morty/master/assets/img/8.jpeg' />
                    <CharacterCard  id={8} name='Test' status='Test' species='Test' gender='Test' image='https://raw.githubusercontent.com/Adalab/rick-y-morty/master/assets/img/8.jpeg' />
                    <CharacterCard  id={9} name='Test' status='Test' species='Test' gender='Test' image='https://raw.githubusercontent.com/Adalab/rick-y-morty/master/assets/img/8.jpeg' />
                    <CharacterCard  id={10} name='Test' status='Test' species='Test' gender='Test' image='https://raw.githubusercontent.com/Adalab/rick-y-morty/master/assets/img/8.jpeg' />
                    <CharacterCard  id={11} name='Test' status='Test' species='Test' gender='Test' image='https://raw.githubusercontent.com/Adalab/rick-y-morty/master/assets/img/8.jpeg' />
            </ul>
        </>
    );
};

export default CharacterList;