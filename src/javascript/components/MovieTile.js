import React, { Component } from 'react';
import PropTypes from 'prop-types';

// components
import Decision from './Decision';

class MovieTile extends Component {
  checkId() {
    const { id, numberOfMovies } = this.props;
    return id < numberOfMovies
      ? this.displayMovieHtml()
      : this.displaySummaryHtml();
  }

  listAcceptedMovies() {
    const { acceptedMovies } = this.props;

    const listAcceptedMovies = [];
    acceptedMovies.forEach(movie => {
      if (movie) {
        listAcceptedMovies.push(`${movie.title} (${movie.rating})`);
        listAcceptedMovies.join(', ');
      }
      return listAcceptedMovies;
    });
    return listAcceptedMovies.join(', ');
  }

  listRejectedMovies() {
    const { rejectedMovies } = this.props;

    const listRejectedMovies = [];
    rejectedMovies.forEach(movie => {
      if (movie) {
        listRejectedMovies.push(`${movie.title} (${movie.rating})`);
        listRejectedMovies.join(', ');
      }
    });
    return listRejectedMovies.join(', ');
  }

  listFavouriteGenres() {
    const { favouriteGenre } = this.props;

    const arr = [];
    Object.keys(favouriteGenre).map(genre => {
      arr.push({ name: genre, value: favouriteGenre[genre] });
    });

    arr.sort((a, b) => a.value - b.value).splice(0, arr.length - 3);

    const names = arr.map(el => el.name);
    return names.join(', ');
  }

  displaySummaryHtml() {
    const { resetProgress } = this.props;
    return (
      <div className="container">
        <div className="movie__summary" style={{ opacity: 1 }}>
          <h1 className="headline__primary">Summary</h1>
          <h2 className="headline__tertiary align-left">
            Movies you accepted:
          </h2>
          <p className="text">{this.listAcceptedMovies()}</p>
          <h2 className="headline__tertiary align-left">
            Movies you rejected:
          </h2>
          <p className="text">{this.listRejectedMovies()}</p>
          <h2 className="headline__tertiary align-left">
            Your favourite genres:
          </h2>
          <p className="text">{this.listFavouriteGenres()}</p>
          <button onClick={resetProgress} type="button">
            Reset
          </button>
        </div>
      </div>
    );
  }

  displayMovieHtml() {
    const { saveDecision } = this.props;

    const {
      movie: {
        title, summary, imageName, rating,
      },
    } = this.props;

    const moviePoster = require(`../../images/${imageName}`); // eslint-disable-line

    return (
      <div className="container">
        <div className="overlap overlap__reject">
          <h1 className="headline__primary">Reject</h1>
          <br />
          <h1 className="headline__primary">{'\u2716'}</h1>
        </div>
        <div className="overlap overlap__like">
          <h1 className="headline__primary">Like</h1>
          <br />
          <h1 className="headline__primary">{'\u2665'}</h1>
        </div>
        <div className="movie__tile">
          <div className="movie__image">
            <img src={moviePoster} alt="movie-poster" />
          </div>

          <div className="movie__content">
            <h1 className="movie__headline headline__primary">
              {title}
              {' '}
              (
              {rating}
              /10)
            </h1>

            <div className="movie__description">
              <h1 className="movie__headline headline__secondary">
                Short description:
              </h1>
              <p className="text">{summary}</p>
            </div>

            <div className="movie__decision">
              <Decision saveDecision={saveDecision} decision="like" />
              <Decision saveDecision={saveDecision} decision="reject" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return <div>{this.checkId()}</div>;
  }
}

MovieTile.propTypes = {
  acceptedMovies: PropTypes.arrayOf(PropTypes.shape({})),
  rejectedMovies: PropTypes.arrayOf(PropTypes.shape({})),
  favouriteGenre: PropTypes.shape({}).isRequired,
  numberOfMovies: PropTypes.number.isRequired,
  resetProgress: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  saveDecision: PropTypes.func.isRequired,
  movie: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.number,
    summary: PropTypes.string,
    imageName: PropTypes.string,
    rating: PropTypes.number,
  }),
};

MovieTile.defaultProps = {
  acceptedMovies: [],
  rejectedMovies: [],
  movie: {},
};

export default MovieTile;
