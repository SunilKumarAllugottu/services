import React from 'react'
import { useNavigate } from 'react-router-dom';
import banner from '../Assets/night-city.jpg'
import './Home.css';
import food from '../Assets/high-angle-burger-with-beer.jpg';
import Beauty from '../Assets/images (2).jpeg';
import Construction from '../Assets/images (3).jpeg';
import Medi from '../Assets/images.jpeg';
import Travel from '../Assets/images (1).jpeg';
import { PiCaretDoubleRightDuotone } from "react-icons/pi";



import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


const Home = () => {
  
  const navigate = useNavigate();

  return (
  <>
    <div>
      <img className='banner' src={banner} alt='Banner'/>
    </div>

    <div>
      <h1 className='head'>
        Popular Services
      </h1>
    </div>
    <div className='img'>
      <div>  
            <img onClick={()=>navigate("/FoodandDrinks")} className='card_inner' src={food} alt='FoodandDrinks'/> 
            <figcaption>asdfghjkl</figcaption>
      </div>


      <div>  
        <img onClick={()=>navigate("/MedicalServices")} className='card_inner' src={Medi} alt='MedicalServices'/>  
        <figcaption>asdfghjkl</figcaption>
      </div>


      <div>  
        <img onClick={()=>navigate("/Travel")} className='card_inner' src={Travel} alt='Travel'/>
        <figcaption>asdfghjkl</figcaption>
      </div>


      <div>  
        <img onClick={()=>navigate("/BeautyandCosmetics")} className='card_inner' src={Beauty} alt='BeautyandCosmetics'/>
        <figcaption>asdfghjkl</figcaption>
      </div>
      <div>  
        <img onClick={()=>navigate("/Construction")} className='card_inner' src={Construction} alt='Construction'/>
        <figcaption>asdfghjkl</figcaption>
      </div>


      <div>  
        <PiCaretDoubleRightDuotone className='icon'/>
        <figcaption>asdfghjkl</figcaption>
      </div>
    </div>


    <div>
      <h1 className='head'>
        Popular Services
      </h1>
    </div>


    <div id='card'>
    <Card elevation={3} sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>


    <Card elevation={3} sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>


    <Card elevation={3} sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>

    </div>
</>
  )
}

export default Home


