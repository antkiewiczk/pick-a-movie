import { connect } from 'react-redux';
import {
  addAcceptedMovie,
  addRejectedMovie,
  resetAccepted,
  resetRejected,
} from '../redux/actions';
import Movies from '../components/Movies';

const mapStateToProps = state => ({
  movies: state.get('movies'),
  acceptedMovies: state.get('acceptedMovies'),
  rejectedMovies: state.get('rejectedMovies'),
});

const mapDispatchToProps = dispatch => ({
  acceptMovie: movie => {
    dispatch(addAcceptedMovie(movie));
  },
  rejectMovie: movie => {
    dispatch(addRejectedMovie(movie));
  },
  resetProgress: () => {
    dispatch(resetAccepted());
    dispatch(resetRejected());
  },
});

const MoviesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Movies);

export default MoviesContainer;
