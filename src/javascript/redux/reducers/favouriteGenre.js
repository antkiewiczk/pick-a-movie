import genreMapper from '../../helpers/genreMapper';

const favouriteGenre = (state = {}, action) => {
  switch (action.type) {
  case 'ADD_FAVOURITE_GENRE': {
    const newState = genreMapper(action.payload, state);
    return newState;
  }
  case 'RESET_GENRES': {
    return {};
  }
  default:
    return state;
  }
};

export default favouriteGenre;
