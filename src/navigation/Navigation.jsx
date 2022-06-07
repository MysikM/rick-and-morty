import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import NotFound from "../pages/NotFound/NotFound";
import Characters from "../pages/Characters/Characters";
import MyWatchList from "../pages/MyWatchList/MyWatchList";
import Character from "../pages/Character/Character";
import Header from "../components/Header/Header";

const Navigation = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Navigate to='/characters' />} />
                <Route path="/rick-and-morty" element={<Navigate to='/characters' />} />
                <Route path="/characters" element={<Characters />} />
                <Route path="/characters/:id" element={<Character />} />
                <Route path="/my-watch-list" element={<MyWatchList />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Navigation;