import React, { Component } from 'react';
import { Header } from '../components';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="routesBox">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
