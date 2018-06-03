import React, { Component } from 'react';
import { render } from 'react-dom';
import MoviesContainer from './javascript/containers/MoviesContainer';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import appReducers from './javascript/redux/reducers/index';

import './App.css';

const store = createStore(
  appReducers, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunkMiddleware)
);

class App extends Component {

  render() {
    return (
      <Provider store = { store }>
        <div className="movie">
          <MoviesContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
