import { createAction } from 'redux-actions';

export const setMovies = createAction('SET_MOVIES');
export const addAcceptedMovie = createAction('ADD_ACCEPTED_MOVIE');
export const addRejectedMovie = createAction('ADD_REJECTED_MOVIE');