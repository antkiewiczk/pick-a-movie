const rejectedMovies = (state = [], action) => {
  switch (action.type) {
  case 'ADD_REJECTED_MOVIE': {
    return [...state, action.payload];
  }
  case 'RESET_REJECTED': {
    return [null];
  }
  default:
    return state;
  }
};

export default rejectedMovies;
