import React, { Component } from 'react';
import 'typeface-roboto'

import './App.css';
import Header from '../../Header/Component/Header.jsx';
import Footer from '../../Footer/Component/Footer.jsx';
import HackerNews from '../../HackerNews/Component/HackerNews.jsx';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
          <HackerNews/>
        <Footer/>
      </div>
    );
  }
}

export default App;
