import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Sidebar />
        <Footer />
      </div>
    );
  }
}

export default App;
