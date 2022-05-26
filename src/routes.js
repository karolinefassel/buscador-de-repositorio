import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Repositories from './pages/Repositories/styled';
import Home from './pages/Home/styled';

export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path = '/' exact  element={<Home/>} />
                <Route path = '/repositories' element={<Repositories/>}/>
            </Routes>
        </BrowserRouter>
    )
}