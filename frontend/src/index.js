import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import thunk from 'redux-thunk';
import Generation from './components/Generation';
import Dragon from './components/Dragon';
import rootReducer from './reducers';
import './index.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunk))
);

render(
  <Provider store={store}>
    <div>
      <h2>Dragon Stack</h2>
      <Generation />
      <Dragon />
    </div>
  </Provider>,
  document.getElementById('root')
);
