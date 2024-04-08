import React from 'react'
import {BrowserRouter, Route, Routes,} from 'react-router-dom';
import BeautyandCosmetics from './Routes/BeautyandCosmetics';
import Home from './Routes/Home';
import FoodandDrinks from './Routes/FoodandDrinks';
import MedicalServices from './Routes/MedicalServices';
import Construction from './Routes/Construction';
import Travel from './Routes/Travel';


const Main = () => {
    return (
    <>
    <BrowserRouter>
    <Routes>
        <Route exact path='/'                  element={<Home/>}/>
        <Route exact path='/FoodandDrinks'     element={<FoodandDrinks/>}/>
        <Route exact path='/MedicalServices'   element={<MedicalServices/>}/>
        <Route exact path='/Travel'            element={<Travel/>}/>
        <Route exact path='/BeautyandCosmetics'element={<BeautyandCosmetics/>}/>
        <Route exact path='/Construction'      element={<Construction/>}/>
    </Routes>
    </BrowserRouter>
    </>
    )
}

export default Main