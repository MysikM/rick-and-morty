import React, {useEffect, useState} from 'react';
import './custom-search.scss';
import {useDispatch} from "react-redux";
import {changeName} from "../../store/slices/characterSlice";

const CustomSearch = () => {
    const [term, setTerm] = useState('');
        const [debouncedTerm, setDebouncedTerm] = useState(term);

    const dispatch = useDispatch();

    useEffect(() => {
        const timer = setTimeout(() => setTerm(debouncedTerm), 1000);
        return () => clearTimeout(timer);
    }, [debouncedTerm]);

    useEffect(() => {
            onSearchSubmit(term);
    }, [term]);

    const handleSearch = (e) => {
        setDebouncedTerm(e.target.value);
    };

    const onSearchSubmit = (term) => {
        dispatch(changeName(term));
    };

    return (
        <input
            className='custom-search'
            value={debouncedTerm}
            onChange={handleSearch}
            placeholder='Search...'
        />
    );
};

export default CustomSearch;