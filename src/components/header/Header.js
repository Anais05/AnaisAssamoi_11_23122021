import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import './Header.css';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <Link to='/AnaisAssamoi_11_23122021/'>
          <img src={ Logo } alt='logo kasa' className="logo-header"></img>
        </Link>
        <nav className="nav-header">
          <NavLink to="/AnaisAssamoi_11_23122021/" className="home-link" style={({ isActive }) => ({textDecoration: isActive ? 'underline' : 'none'})}>
            Accueil
          </NavLink>
          <NavLink to="/AnaisAssamoi_11_23122021/About" className="about-link" style={({ isActive }) => ({textDecoration: isActive ? 'underline' : 'none'})}>
            A propos
          </NavLink> 
        </nav>
      </header>
    )
  }
}