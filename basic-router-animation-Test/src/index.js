import React from 'react';
import ReactDOM from 'react-dom';


// style sheet
import './styles/index.css';
import './styles/navigation.css';
import './styles/animation.css';

import { Router, browserHistory } from 'react-router';

import routes from './helper/routes';

ReactDOM.render(
  <Router history={browserHistory} routes={routes}/>,
  document.getElementById('root')
);
