import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { injectGlobal } from 'styled-components';
import { Main, AsideNav, AsideDirTree } from './containers';

injectGlobal`
  body {
    margin: 0;
    padding 0;
    font-family: sans-serif;
  }
`

const root = document.getElementById('root');
render(
  <Router>
    <Fragment>
      <AsideNav />
      <AsideDirTree />
      <Switch>
        <Route exact path='/' component={Main} />
      </Switch>
    </Fragment>
  </Router>
, root);