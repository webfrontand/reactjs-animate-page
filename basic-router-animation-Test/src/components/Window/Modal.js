import React, { Component } from 'react';

class Modal extends Component {
  render(){
    let modalStyle = {
      position: 'absolute',
      top: '20%',
      left: '50%',
      transform: 'translate(-20%, -50%)',
      zIndex: '9999',
      background: '#fff'
    }


    let backgroundModal = {
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: '0',
      left: '0',
      zIndex: '9998',
      background: 'rgba(0, 0, 0, 0.3)'
    }

    if(!this.props.isModalOpen) return null;
    return (
      <div>
        <div style={modalStyle}>
          {this.props.children}
        </div>
        <div style={backgroundModal} onClick={this.props.closeModal}></div>
      </div>
    )
  }
}

export default Modal;
