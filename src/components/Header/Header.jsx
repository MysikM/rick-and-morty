import React from 'react';
import {NavLink} from "react-router-dom";
import './header.scss';
import logo from '../../assets/image/logo.png';

const Header = () => {
    return (
        <header className='header'>
            <nav className='header--navigation'>
                <img src={logo} alt="logo"/>
                <ul className='header--links'>
                    <li>
                        <NavLink className='header--link' to={'/characters'}>Characters</NavLink>
                    </li>
                    <li>
                        <NavLink className='header--link' to={'/my-watch-list'}>My watch list</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;