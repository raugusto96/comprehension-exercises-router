import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import StrictAccess from './StrictAcess';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
// import { Link } from 'react-router-dom';
import { Switch } from 'react-router';
class App extends Component {
  render() {
    const user = { username: 'joao', password: '1234' };
    return (
      <BrowserRouter>
        {/* <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link> */}
        <Switch>
          <Route path="/users/:id" render={ (props) => <Users {...props} /> } />
          <Route path="/strict-access" render={ () => <StrictAccess user={ user }  /> } />
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
