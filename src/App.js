import React, { Component } from 'react';
import Home from './components/Home';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" component={Home} />
      </BrowserRouter>
    );
  }
}

export default App;
