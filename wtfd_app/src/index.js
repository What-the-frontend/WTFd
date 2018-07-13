import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { injectGlobal } from 'styled-components';
import { Main } from './containers';

injectGlobal`
  body {
    margin: 0;
    padding 0;
  }
`

const root = document.getElementById('root');
render(
  <Router>
    <Route exact path='/' component={Main} />
  </Router>
, root);