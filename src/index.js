import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "./components/header/Header";
import Home from "./pages/home/Home"
import Apartment from "./pages/apartment/Apartment"
import About from "./pages/about/About";
import Error from "./pages/error/Error";
import Footer from "./components/footer/Footer";
import './index.css';

ReactDOM.render(
  <React.StrictMode>
     <BrowserRouter>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/apartment/:id" element={<Apartment />} />
            <Route path="/About" element={<About />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
