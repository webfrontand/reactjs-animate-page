import React, { Component } from 'react';
import { Header } from '../components';
import { Modal } from '../components';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

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
    const path = this.props.location.pathname;
    var segment = path.split('/')[1] || 'root';

    return (
      <div>
        <Header openModal={this.openModal}/>
        <div className="routesBox">
          <ReactCSSTransitionGroup component='div' transitionName={segment === 'root' ? 'reversePageSwap' : 'pageSwap'}
          transitionEnterTimeout={600} transitionLeaveTimeout={600}>
            {React.cloneElement(this.props.children, { key: segment })}
          </ReactCSSTransitionGroup>
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
