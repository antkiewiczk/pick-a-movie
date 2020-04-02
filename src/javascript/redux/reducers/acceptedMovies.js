const acceptedMovies = (state = [], action) => {
  switch (action.type) {
  case 'ADD_ACCEPTED_MOVIE': {
    return [...state, action.payload];
  }
  case 'RESET_ACCEPTED': {
    return [null];
  }
  default:
    return state;
  }
};

export default acceptedMovies;
