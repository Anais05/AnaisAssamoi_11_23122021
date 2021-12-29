import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import './Header.css';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <Link to='/'>
          <img src={ Logo } alt='logo kasa' className="logo-header"></img>
        </Link>
        <nav className="nav-header">
          <NavLink to="/" className="home-link" style={({ isActive }) => ({textDecoration: isActive ? 'underline' : 'none'})}>
            Accueil
          </NavLink>
          <NavLink to="/About" className="about-link" style={({ isActive }) => ({textDecoration: isActive ? 'underline' : 'none'})}>
            A propos
          </NavLink> 
        </nav>
      </header>
    )
  }
}