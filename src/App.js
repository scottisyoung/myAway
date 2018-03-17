import React, { Component } from 'react';
import "./App.css"

// Components

import NavHeader from './components/navHeader/navHeader.js';
import Home from './components/home/home.js';
import Footer from './components/footer/footer.js';

class App extends Component {
    
  render() {
        return (

            <div>
                <NavHeader />
                <Home/>
                <Footer/>
            </div>
    );
  }
}

export default App;
