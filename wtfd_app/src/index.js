import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { injectGlobal } from 'styled-components';
import { Main, AsideMenu } from './containers';

injectGlobal`
  body {
    margin: 0;
    padding 0;
  }
`

const root = document.getElementById('root');
render(
  <Router>
    <Fragment>
      <AsideMenu />
      <Switch>
        <Route exact path='/' component={Main} />
      </Switch>
    </Fragment>
  </Router>
, root);