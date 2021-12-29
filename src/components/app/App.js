import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "../header/Header";
import Home from "../../pages/home/Home"
import Apartment from "../../pages/apartment/Apartment"
import About from "../../pages/about/About";
import Error from "../../pages/error/Error";
import Footer from "../footer/Footer";
import '../../index.css';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/apartment/:id"  element={<Apartment />} />
            <Route path="/About" element={<About />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    );
  }
}