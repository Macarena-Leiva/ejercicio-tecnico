import React, { useState } from 'react'
import { Link, NavLink} from 'react-router-dom'
import '../styles/navbar.css'
import logoServiClub from '../assets/logo.png'
import user from '../assets/user.png'

export const Navbar = () => {

    const[isOpen, setIsOpen] = useState(false)

  return (
    <>
        <nav>
            <Link to='/' className='linkDecoration'><img className='logo' src={logoServiClub} alt='logo' /></Link>
          
          <ul className={`options ${isOpen && "open"}`}>
            <NavLink to='/' className={({ isActive }) => isActive ? "linkDecoration linkActive  " : "linkDecoration"}><li>Home</li></NavLink>
            <NavLink to='/desafios' className={({ isActive }) => isActive ? "linkDecoration linkActive  " : "linkDecoration"}><li>Desafíos</li></NavLink>
            <NavLink to='/requisitos' className={({ isActive }) => isActive ? "linkDecoration linkActive  " : "linkDecoration"}><li>Requisitos</li></NavLink>
            <NavLink to='/beneficios' className={({ isActive }) => isActive ? "linkDecoration linkActive  " : "linkDecoration"}><li>Beneficios</li></NavLink>
            <NavLink to='/info' className={({ isActive }) => isActive ? "linkDecoration linkActive  " : "linkDecoration"}><li>¿Cómo funciona?</li></NavLink>
            <NavLink to='/serviClub' className={({ isActive }) => isActive ? "linkDecoration linkActive  " : "linkDecoration"}><li>Tienda ServiClub</li></NavLink>
          </ul>
          

          <ul className='points'>
            <Link to='/misPuntos' className='linkDecoration'><li className='margin'>Mis puntos</li></Link>
            <Link to='/' className='linkDecoration'><li className='margin number'>1,480 <img className='user' src={user} alt='user' /></li></Link>
          </ul>

          <div className={`navToggle ${isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen)}>
            <span></span>
            <span></span>
            <span></span>

          </div>

        </nav>
    </>
  )
}
