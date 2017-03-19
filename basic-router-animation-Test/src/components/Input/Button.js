import React, { Component } from 'react';


class Button extends Component {
  openModal = () => {
    this.props.openModal();
  }
  render(){
    return (
      <button onClick={this.openModal}>
        {this.props.name}
      </button>
    )
  }
}

export default Button;
