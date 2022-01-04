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
            <Route path="/AnaisAssamoi_11_23122021/" element={<Home />} />
            <Route path="/AnaisAssamoi_11_23122021/apartment/:id" element={<Apartment />} />
            <Route path="/AnaisAssamoi_11_23122021/About" element={<About />} />
            <Route path="/AnaisAssamoi_11_23122021/*" element={<Error />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
