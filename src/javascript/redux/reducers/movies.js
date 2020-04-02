import seed from '../../seed/data.json';

const movies = (state = seed, action) => {
  switch (action.type) {
  case 'SET_MOVIES':
    return action.payload;
  default:
    return state;
  }
};

export default movies;
