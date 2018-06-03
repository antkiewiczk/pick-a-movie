import { combineReducers } from 'redux-immutable';

import { movies } from './movies.js';
import { acceptedMovies } from './acceptedMovies.js';
import { rejectedMovies } from './rejectedMovies.js';

const appReducers = combineReducers({
  movies,
  acceptedMovies,
  rejectedMovies,
});

export default appReducers;