import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';

import styled from 'styled-components';

import Header from './components/Header';
import Menu from './components/Menu';
import Main from './components/Main';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <Menu />
      <Main /> 
      </div>
    );
  }
}

export default App;
