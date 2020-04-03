import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

// components
import ProgressBarContainer from './javascript/containers/ProgressBarContainer';
import MoviesContainer from './javascript/containers/MoviesContainer';

// redux
import appReducers from './javascript/redux/reducers';

// styles
import './App.scss';

// logo
import logo from './images/logo.png';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line

const store = createStore(
  appReducers,
  composeEnhancer(applyMiddleware(thunkMiddleware)),
);

const App = () => (
  <Provider store={store}>
    <div>
      <ProgressBarContainer />
      <div className="container">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="movie">
        <MoviesContainer />
      </div>
    </div>
  </Provider>
);

export default App;
