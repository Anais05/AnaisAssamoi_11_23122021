import React, { Component } from 'react';
import { Link } from "react-router-dom"
import './Error.css';


export default class Home extends Component {
  render() {
    return (
      <main className="error">
        <h1 className="error-code">404</h1>
        <h2 className="error-text">Oups ! La page que vous demandez n'existe pas.</h2>
        <Link className="error-link" to="/">Retourner sur la page d'accueil</Link>
      </main>
    )
  }
}