import React from 'react'
import { useNavigate } from 'react-router-dom';
import banner from '../Assets/night-city.jpg'
import './Home.css';
import food from '../Assets/high-angle-burger-with-fries-beer.jpg';
import Beauty from '../Assets/images (2).jpeg';
import Construction from '../Assets/images (3).jpeg';
import Medi from '../Assets/images.jpeg';
import Travel from '../Assets/images (1).jpeg';

const Home = () => {
  
  const navigate = useNavigate();

  return (
  <>
    <div>
      <img className='banner' src={banner} alt='Banner'/>
    </div>


    <div>
      <img onClick={()=>navigate("/FoodandDrinks")}      className='card' src={food} alt='FoodandDrinks'/>
      <img onClick={()=>navigate("/MedicalServices")}    className='card' src={Medi} alt='MedicalServices'/>
      <img onClick={()=>navigate("/Travel")}             className='card' src={Travel} alt='Travel'/>
      <img onClick={()=>navigate("/BeautyandCosmetics")} className='card' src={Beauty} alt='BeautyandCosmetics'/>
      <img onClick={()=>navigate("/Construction")}       className='card' src={Construction} alt='Construction'/>
    </div>
  </>
  )
}

export default Home