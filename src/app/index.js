import React from 'react';

import { createStore, applyMiddleware } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import Container from './containers/list-container';
import Header from './components/header';
import Footer from './containers/footer-container';

import RootReducer from './reducers/reducers';

let store = createStore(RootReducer, applyMiddleware(thunkMiddleware));
let rootElement = document.getElementById('app-root');

render(
  <Provider store={store}>
    <div className={'container jumbotron jumbotron-sm'}>
      <Header />
      <Container />
      <Footer />
    </div>
  </Provider>,
  rootElement
);
