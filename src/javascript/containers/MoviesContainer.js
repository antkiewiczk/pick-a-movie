import { connect } from 'react-redux';
import {
  addAcceptedMovie,
  addRejectedMovie,
  favouriteGenre,
  resetAccepted,
  resetRejected,
  resetGenre,
} from '../redux/actions';
import Movies from '../components/Movies';

const mapStateToProps = state => ({
  movies: state.get('movies'),
  acceptedMovies: state.get('acceptedMovies'),
  rejectedMovies: state.get('rejectedMovies'),
  favouriteGenre: state.get('favouriteGenre'),
});

const mapDispatchToProps = dispatch => ({
  acceptMovie: movie => {
    dispatch(addAcceptedMovie(movie));
    dispatch(favouriteGenre(movie.genre));
  },
  rejectMovie: movie => {
    dispatch(addRejectedMovie(movie));
  },
  resetProgress: () => {
    dispatch(resetAccepted());
    dispatch(resetRejected());
    dispatch(resetGenre());
  },
});

const MoviesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Movies);

export default MoviesContainer;
