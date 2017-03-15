import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class App extends Component {
  constructor(){
    super();

    this.state = {
      items:['I\'m number 1', 'I\'m number 2', 'I\'m number 3'],
      itemNumber: 3
    };
  }

  onAddItem(){
    this.setState({
      itemNumber: this.state.itemNumber + 1,
      items: this.state.items.concat(['I\'m number '+(this.state.itemNumber + 1)])
    });
  }

  onDeleteItem(id){
    const newItems = this.state.items.slice();
    newItems.splice(id, 1);
    this.setState({
      items: newItems
    });
  }

  render() {
    return (
      <div>
        <h1 onClick={this.onAddItem.bind(this)}>ADD ITEM</h1>
        <ul>
          <ReactCSSTransitionGroup
            transitionName="flip"
            transitionEnter={300}
            transitionLeave={300}
            transitionAppear={true}
            transitionAppearTimeout={1000}>
            {this.state.items.map((item, i) => {
              return (
                <li key={item} onClick={this.onDeleteItem.bind(this, i)}>
                  {item}
                </li>
              )
            })}
          </ReactCSSTransitionGroup>
        </ul>
      </div>
    );
  }
}

export default App;
