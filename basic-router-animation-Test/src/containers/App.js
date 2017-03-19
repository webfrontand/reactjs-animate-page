import React, { Component } from 'react';
import { Header } from '../components';
import { Modal } from '../components';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      isModalOpen: false
    }
  }

  openModal = () => {
    this.setState({
      isModalOpen: true
    });
  }

  closeModal = () => {
    this.setState({
      isModalOpen: false
    });
  }

  render() {
    return (
      <div>
        <Header openModal={this.openModal}/>
        <div className="routesBox">
          {this.props.children}
        </div>
        <Modal isModalOpen={this.state.isModalOpen} closeModal={this.closeModal}>
          <h1>Modal Title</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button onClick={this.closeModal}>close</button>
        </Modal>
      </div>
    );
  }
}

export default App;
