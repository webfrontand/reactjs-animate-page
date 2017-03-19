import React, { Component } from 'react';
import { Link } from 'react-router';
import match from '../../helper/match';

class Node extends Component {
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
    }, 0);
  }
  render(){
    return (
      <div className={"animated "+(this.state.event ? "bounceInLeft" : "")}>
        <h1>Node</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <button>
          <Link to="/">끝</Link>
        </button>
      </div>
    )
  }
}

export default Node;
