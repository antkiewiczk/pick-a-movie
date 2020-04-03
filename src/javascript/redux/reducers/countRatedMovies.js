const countRatedMovies = (state = 0, action) => {
  switch (action.type) {
  case 'COUNT_RATED_MOVIES': {
    return action.payload;
  }
  case 'RESET_COUNT': {
    return 0;
  }
  default:
    return state;
  }
};

export default countRatedMovies;
