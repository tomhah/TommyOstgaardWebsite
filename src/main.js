import React from 'react';
import {render} from 'react-dom';
import Controller from 'cerebral';
import Model from 'cerebral-model-baobab';
import {Container} from 'cerebral-view-react';
import AppModule from './AppModule';
import App from './App.js';

const controller = Controller(Model({}));
controller.addModules({app: AppModule})

render((
  <Container controller={controller}>
    <App/>
  </Container>
), document.querySelector('#app'));