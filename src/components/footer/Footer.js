import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import LogoFooter from '../../assets/logoFooter.png'
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <footer>
                <Link to="/">
                    <img src={LogoFooter} alt="Kasa logo Footer" />
                </Link>
                <p className="copyright">© 2021 Kasa. Tous droits réservés</p>
            </footer>
        )
    }
}

export default Footer;