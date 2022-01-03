import React, { Component } from 'react';
import SearchAppBar from './components/NavBar/SearchAppBar';
import logo from './assets/logo.svg';
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="main__wrap">
        <main className="container">
          <div className="card__box">
            <SearchAppBar/>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
