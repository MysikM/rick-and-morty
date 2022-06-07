import React, {useEffect, useRef, useState} from 'react';
import './custom-select.scss';
import {typeSelects} from "../../data/data";
import {useDispatch, useSelector} from "react-redux";
import {changeGender, changeSpecies, changeStatus} from "../../store/slices/characterSlice";

const CustomSelect = ({selectList, type}) => {
    const ref = useRef();
    const dispatch = useDispatch();

    const {species, status, gender} = useSelector(state => state.character);

    const [select, setSelect] = useState(selectList[0]);
    const [isView, setIsView] = useState(false);

    const checkType = (item) => {
        if (type === typeSelects.STATUS && item.name !== status){
            dispatch(changeStatus(item));
        }
        if (type === typeSelects.SPECIES && item.name !== species){
            dispatch(changeSpecies(item));
        }
        if (type === typeSelects.GENDER && item.name !== gender){
            dispatch(changeGender(item));
        }
    };

    const handleSelect = (item) => {
        setSelect(item);
        setIsView(false);
        checkType(item);
    };



    useEffect(() => {
        const checkIfClickedOutside = e => {
            if (select && ref.current && !ref.current?.contains(e.target)) {
                setIsView(false);
            }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)
        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [isView]);

    return (
        <div ref={ref} className='custom-select'>
            <h6 className='custom-select--title' onClick={() => {setIsView(!isView)}}>{select.name}</h6>
            <ul className={`custom-select--dropdown ${isView && 'custom-select--dropdown__open'}`}>
                {selectList.map(el => <li className={`${select === el  && 'active'}`} key={el.id} onClick={()=>{handleSelect(el)}}>{el.name}</li>)}
            </ul>
        </div>
    );
};

export default CustomSelect;