import React, { Component } from 'react';

class About extends Component {
  render(){
    return (
      <div>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default About;
