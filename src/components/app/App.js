import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "../header/Header";
import Home from "../../pages/home/Home"
import Footer from "../footer/Footer";
import Error from "../../pages/error/Error";
import '../../index.css';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/apartment/:id" /> 
            <Route path="/About" />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    );
  }
}