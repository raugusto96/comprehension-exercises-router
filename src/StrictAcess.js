import React, { Component } from 'react';
import { Redirect } from 'react-router';

export default class StrictAcess extends Component {
  render() {
    const { user: { username, password } } = this.props;
    return (
      <div>
        { !(username === 'joao' && password === '1234') ? alert('Access denied') && <Redirect to="/" /> : <p>Welcome { username }</p> }
      </div>
    );
  }

}