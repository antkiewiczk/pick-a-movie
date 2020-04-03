import { combineReducers } from 'redux-immutable';

import movies from './movies';
import acceptedMovies from './acceptedMovies';
import rejectedMovies from './rejectedMovies';
import favouriteGenre from './favouriteGenre';
import countRatedMovies from './countRatedMovies';

const appReducers = combineReducers({
  movies,
  acceptedMovies,
  rejectedMovies,
  favouriteGenre,
  countRatedMovies,
});

export default appReducers;
