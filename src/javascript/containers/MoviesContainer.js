import {connect} from 'react-redux';
import { addAcceptedMovie, addRejectedMovie } from '../redux/actions';
import MoviesComponent from '../components/moviesComponent';

const mapStateToProps = (state) => {
  return {
    movies: state.get('movies'),
    acceptedMovies: state.get('acceptedMovies'),
    rejectedMovies: state.get('rejectedMovies'),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    acceptMovie: (movie) => {
      dispatch(addAcceptedMovie(movie));
    },
    rejectMovie: (movie) => {
      dispatch(addRejectedMovie(movie));
    }
  }
}

const MoviesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesComponent);

export default MoviesContainer;