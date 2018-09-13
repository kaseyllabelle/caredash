import React, {Fragment} from 'react';
import {Route} from 'react-router';

import Header from './components/header';
import Home from './containers/home';
import Footer from './containers/footer';

const App = () => (
  <Fragment>
    <Route path="/" component={Header} />
    <Route exact path="/" component={Home} />
    <Route path="/" component={Footer} />
  </Fragment>
)

export default App;