import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <header>
        <Link to='/'>
          <img src={ Logo } alt='logo kasa' className="logo-header"></img>
        </Link>
        <nav className="nav-header">
          <Link to="/" className="home-link">Accueil</Link>
          <Link to="/About" className="about-link">A propos</Link> 
        </nav>
      </header>
    )
  }
}