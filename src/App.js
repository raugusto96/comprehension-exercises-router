import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
// import { Link } from 'react-router-dom';
import { Switch } from 'react-router';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {/* <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link> */}
        <Switch>
          <Route path="/users/:id" render={ (props) => <Users {...props} /> } />
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
