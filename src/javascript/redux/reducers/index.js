import { combineReducers } from 'redux-immutable';

import movies from './movies';
import acceptedMovies from './acceptedMovies';
import rejectedMovies from './rejectedMovies';

const appReducers = combineReducers({
  movies,
  acceptedMovies,
  rejectedMovies,
});

export default appReducers;
