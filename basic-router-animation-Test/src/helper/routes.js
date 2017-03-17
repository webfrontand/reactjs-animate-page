import React from 'react';
import { App } from '../containers';
import { Home, Products, About, Css, Html, Node } from '../components';

import { Route, IndexRoute } from 'react-router';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="home" component={Home} />
    <Route path="about" component={About} >
      <IndexRoute component={Css} />
      <Route path="css" component={Css} />
      <Route path="html" component={Html} />
      <Route path="node" component={Node} />
    </Route>
    <Route path="products" component={Products} />
  </Route>
)
