export const rejectedMovies = (state = [], action) => {
    switch(action.type){
      case 'ADD_REJECTED_MOVIE': {
        return [...state, action.payload];
      }
      default:
        return state;
    }
  }