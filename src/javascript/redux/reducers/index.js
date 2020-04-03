import { combineReducers } from 'redux-immutable';

import movies from './movies';
import acceptedMovies from './acceptedMovies';
import rejectedMovies from './rejectedMovies';
import favouriteGenre from './favouriteGenre';

const appReducers = combineReducers({
  movies,
  acceptedMovies,
  rejectedMovies,
  favouriteGenre,
});

export default appReducers;
