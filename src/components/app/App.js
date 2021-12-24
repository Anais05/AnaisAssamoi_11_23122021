import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import '../../index.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route exact path='/'>
                HomePage
            </Route>
            <Route exact path="/apartment/:id"> 
                single (avec props)
              </Route>
            <Route exact path='/About'>
              AboutPage
            </Route>
            <Route>
              Error404
            </Route>
          </Routes>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
