import React, {useEffect, useState} from 'react';
import './character-list.scss';
import CharacterCard from "../CharacterCard/CharacterCard";
import {useDispatch, useSelector} from "react-redux";
import {initial, loadCharacters} from "../../store/slices/characterSlice";
import Title from "../Title/Title";
import Preload from "../Preloader/Preloader";

const CharacterList = () => {
        const dispatch = useDispatch();
        const [page, setPage] = useState(() => 1);
        const loadMore = () => setPage(page + 1);
        const {
                characters,
                pages,
                isLoading,
                error,
                species,
                status,
                gender,
                name
        } = useSelector(state => state.character);

        useEffect(()=>{
                return () => {
                        dispatch(initial())
                };
        } ,[]);

        useEffect(()=>{
                dispatch(loadCharacters({page, species, gender, status, name}))
        },[page, species, gender, status, name]);

        useEffect(()=>{
                setPage(1);
        }, [species, gender, status]);

        return (
            <>
                    <ul className='character-list'>
                            {characters.length > 0
                                ? characters?.map(el => <CharacterCard key={el.id} {...el} />)
                                :  !isLoading && (<Title content='No result' />)
                            }
                    </ul>
                    {isLoading && <Preload />}
                    {page < pages && (<button className='character--btn' onClick={loadMore}>Load more!</button>)}
                    {error && <Title content={error} /> }
            </>
        );
};

export default CharacterList;