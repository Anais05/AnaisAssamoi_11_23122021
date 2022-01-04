import React from 'react';
import { Link } from 'react-router-dom';
import LogoFooter from '../../assets/logoFooter.png';
import './Footer.css';

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <Link to="/AnaisAssamoi_11_23122021/">
          <img src={LogoFooter} alt="Kasa logo Footer" />
        </Link>
        <p className="copyright">© 2021 Kasa. Tous droits réservés</p>
      </footer>
    )
  }
}