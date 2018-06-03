export const acceptedMovies = (state = [], action) => {
    switch(action.type) {
      case 'ADD_ACCEPTED_MOVIE': {
        return [...state, action.payload];
      }
      default:
        return state;
    }
  }