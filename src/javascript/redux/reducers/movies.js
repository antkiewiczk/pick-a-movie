import seed from '../../seed/data.json';

export const movies = (state = seed, action) => {
  switch(action.type){
    case 'SET_MOVIES': 
      return action.payload;
    default:
      return state;
  }
}