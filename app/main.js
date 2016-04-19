import React from 'react';
import {render} from 'react-dom';
import controller from './controller.js';
import {Container} from 'cerebral-view-react';
import Router from 'cerebral-module-router';
import Http from 'cerebral-module-http';
import Devtools from 'cerebral-module-devtools';

import App from './App.js';

import Home from './modules/home';

controller.addSignals({
});

controller.addServices({
});

controller.addModules({
  home: Home(),

  http: Http(),
  devtools: process.env.NODE_ENV === 'production' ? () => {} : Devtools(),
  router: Router({
    '/': 'home.opened'
  }, {
    onlyHash: true,
    mapper: {query: true}
  })
});

render((
  <Container controller={controller}>
    <App/>
  </Container>
), document.querySelector('#app'));
