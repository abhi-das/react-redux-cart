import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import Navbar from './components/navbar';
import Home from './components/home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <main className="page">
          <Home />
        </main>
      </div>
    )
  }
}

export default App;
