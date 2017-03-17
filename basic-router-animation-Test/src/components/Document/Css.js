import React, { Component } from 'react';
import { Link } from 'react-router';

import match from '../../helper/match';

class Css extends Component {
  constructor(){
    super()
    this.state = {
      event: false
    }
  }
  componentDidMount(){
    setTimeout(() => {
      this.setState({
        event: match(this.props.location.pathname)
      })
    }, 1000);
  }
  render(){
    const { router } = this.context;

    return (
      <div className={(this.state.event ? "leftSlide" : "")}>
        <h1>CSS</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <button>
          <Link to="/about/html">다음</Link>
        </button>
      </div>
    )
  }
}

export default Css;
