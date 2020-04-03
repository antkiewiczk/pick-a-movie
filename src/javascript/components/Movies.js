import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Swipeable from 'react-swipeable';

// components
import MovieTile from './MovieTile';

class Movies extends Component {
  constructor(props) {
    const { movies } = props;

    super(props);
    this.state = {
      recommendations: movies,
      ratedCount: 0,
    };
  }

  currentReccomendation = () => {
    const { recommendations, ratedCount } = this.state;
    return recommendations[ratedCount];
  }

  rateMovie = rating => {
    let { ratedCount } = this.state;
    const { rejectMovie, acceptMovie } = this.props;
    if (rating === 'like') {
      acceptMovie(this.currentReccomendation());
    } else {
      rejectMovie(this.currentReccomendation());
    }
    this.setState({
      ratedCount: (ratedCount += 1),
    });
  };

  swipedLeft = (e, absX) => {
    this.clearOverlap();
    if (absX > 100) {
      this.rateMovie('reject');
    }
  };

  swipedRight = (e, absX) => {
    this.clearOverlap();
    if (absX < -100) {
      this.rateMovie('like');
    }
  };

  clearOverlap=() => {
    const overlap = document.querySelectorAll('.overlap');
    const overlapArray = Array(...overlap);

    overlapArray.forEach(item => {
      item.style.opacity = 0;
    });
  }

  swipingLeft = (e, absX) => {
    const overlap = document.querySelector('.overlap__reject');
    if (overlap) {
      overlap.style.opacity = absX / 250;
    }
  }

  swipingRight= (e, absX) => {
    const overlap = document.querySelector('.overlap__like');
    if (overlap) {
      overlap.style.opacity = absX / 250;
    }
  }

  resetProgress = () => {
    const { resetProgress } = this.props;

    this.setState({
      ratedCount: 0,
    }, () => resetProgress());
  };

  render() {
    const { recommendations, ratedCount } = this.state;
    const { acceptedMovies, rejectedMovies, favouriteGenre } = this.props;

    return (
      <Swipeable
        onSwipedRight={this.swipedRight}
        onSwipedLeft={this.swipedLeft}
        onSwipingLeft={this.swipingLeft}
        onSwipingRight={this.swipingRight}
      >
        <MovieTile
          id={ratedCount}
          movie={this.currentReccomendation()}
          saveDecision={this.rateMovie}
          acceptedMovies={acceptedMovies}
          rejectedMovies={rejectedMovies}
          favouriteGenre={favouriteGenre}
          numberOfMovies={recommendations.length}
          resetProgress={this.resetProgress}
        />
      </Swipeable>
    );
  }
}

Movies.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  acceptMovie: PropTypes.func.isRequired,
  rejectMovie: PropTypes.func.isRequired,
  rejectedMovies: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  acceptedMovies: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  resetProgress: PropTypes.func.isRequired,
  favouriteGenre: PropTypes.shape({}).isRequired,
};

export default Movies;
