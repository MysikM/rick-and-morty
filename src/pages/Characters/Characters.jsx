import React from 'react';
import './characters.scss'
import Selects from "../../components/Selects/Selects";
import CharacterList from "../../components/CharacterList/CharacterList";

const Characters = () => {
    return (
        <main className='characters'>
            <Selects />
            <CharacterList />
        </main>
    );
};

export default Characters;