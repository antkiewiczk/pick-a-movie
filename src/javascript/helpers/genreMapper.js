const genreMapper = (genres, state) => {
  const newState = state;

  genres.map(genre => {
    if (!newState[genre]) {
      newState[genre] = 1;
    } else {
      newState[genre] += 1;
    }
  });

  return newState;
};

export default genreMapper;
