import React from 'react';
import Title from "../Title/Title";
import './selects.scss'
import {useSelector} from "react-redux";
import CustomSelect from "../CustomSelect/CustomSelect";
import {genderSelect, speciesSelect, statusSelect, typeSelects} from "../../data/data";
import CustomSearch from "../CustomSearch/CustomSearch";

const Selects = () => {
    const { count } = useSelector(state => state.character);
    return (
        <section className='selects'>
            <Title content={`${count || 0} characters`} />
            <div className='selects--container'>
                <CustomSelect selectList={statusSelect} type={typeSelects.STATUS} />
                <CustomSelect selectList={speciesSelect} type={typeSelects.SPECIES} />
                <CustomSelect selectList={genderSelect} type={typeSelects.GENDER} />
                <CustomSearch/>
            </div>
        </section>
    );
};

export default Selects;