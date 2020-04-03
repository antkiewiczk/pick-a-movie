import { createAction } from 'redux-actions';

export const setMovies = createAction('SET_MOVIES');

export const addAcceptedMovie = createAction('ADD_ACCEPTED_MOVIE');
export const addRejectedMovie = createAction('ADD_REJECTED_MOVIE');
export const resetAccepted = createAction('RESET_ACCEPTED');
export const resetRejected = createAction('RESET_REJECTED');

export const favouriteGenre = createAction('ADD_FAVOURITE_GENRE');
export const resetGenre = createAction('RESET_GENRES');

export const countRatedMovies = createAction('COUNT_RATED_MOVIES');
export const resetCount = createAction('RESET_COUNT');
