import React, {useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchCharacterById, initialCharacter} from "../../store/slices/characterSlice";
import './character.scss';
import Title from "../../components/Title/Title";
import Preload from "../../components/Preloader/Preloader";

const Character = () => {
    const {id} = useParams();
    const dispatch = useDispatch();

    const {
        name,
        created,
        error,
        episode,
        gender,
        isLoading,
        location,
        species,
        status,
        image
    } = useSelector(state => state.character.character);

    useEffect(()=>{
        dispatch(fetchCharacterById(id));

        return () => {
            dispatch(initialCharacter())
        }
    }, [id]);

    if (isLoading) {
        return <Preload />
    }

    if(error) {
        return <Title content={error} />
    }

    return (
            <main className="user">
                <section className='user--container'>
                    <img className='user--img' src={image} alt=""/>
                    <div className='user--info'>
                        <h2 className='user--name'>{name}</h2>
                        <p><span className='user--bold'>Status:</span> {status}</p>
                        <p><span className='user--bold'>Species:</span> {species}</p>
                        <p><span className='user--bold'>Gender:</span> {gender}</p>
                        <p><span className='user--bold'>No. id episodes:</span> {episode}</p>
                        <p><span className='user--bold'>Created:</span> {created}</p>
                        <p className='user--description'>
                            Last known location:
                        </p>
                        <span className='user--subtitle'>
                        {location}
                    </span>
                    </div>
                </section>
                <Link className='user--btn' to='/characters'>&lt; Back to list</Link>
            </main>
    );
};

export default Character;