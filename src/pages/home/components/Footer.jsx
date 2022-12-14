import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css';
import logoFooter from '../assets/logoFooter.png';
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import youtube from '../assets/youtube.png';

export const Footer = () => {
  return (
    <footer>
      <Link to='/' className='linkDecoration'><img className='logoFooter' src={logoFooter} alt="logo" /></Link>
      
      <ul className='ulFooter'>
        <Link to='/' className='linkDecoration' ><li className='liFooter'>Home</li></Link>
        <Link to='/desafios' className='linkDecoration'><li className='liFooter'>Desafíos</li></Link>
        <Link to='/requisitos' className='linkDecoration'><li className='liFooter'>Requisitos</li></Link>
        <Link to='/beneficios' className='linkDecoration'><li className='liFooter'>Beneficios</li></Link>
        <Link to='/info' className='linkDecoration'><li className='liFooter'>¿Cómo funciona?</li></Link>
        <Link to='/serviClub' className='linkDecoration'><li className='liFooter'>Tienda</li></Link>
        <Link to='/tyc' className='linkDecoration conditions'><li className='liFooter'>Términos y condiciones</li></Link>
      </ul>

      <ul className='ulSocial'>
      <li><a href="https://es-la.facebook.com/" target="_blank" rel="noreferrer"><img className='social' src={facebook} alt="facebook" /></a></li>
      <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><img className='social' src={instagram} alt="instagram" /></a></li>
      <li><a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><img className='socialYoutube' src={youtube} alt="youtube" /></a></li>
      </ul>

    </footer>
  )
}
