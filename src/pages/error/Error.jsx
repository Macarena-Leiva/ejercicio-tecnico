import React from 'react';
import { Link } from 'react-router-dom';
import error from './assets/error.png'
import './styles/error.css'

export const Error = () => {
  return (
    <div className='containerError'>
      <img className='error' src={error} alt="error" />
      <p className='pError'>No encontramos la página que estas buscando</p>
      <p className='pError2'>volver a <Link to='/' className='linkDecoration'><span className='volver'>página de inicio</span></Link></p>
    </div>
  )
}
