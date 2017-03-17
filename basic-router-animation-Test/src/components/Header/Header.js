import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
  render(){
    return (
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Header;
