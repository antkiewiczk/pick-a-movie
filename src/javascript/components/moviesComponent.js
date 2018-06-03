import React, { Component } from 'react';
import { render } from 'react-dom';
import MovieTileComponent from './movieTileComponent';
import Swipeable from 'react-swipeable'

class MoviesComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recommendations: this.props.movies,
      ratedReccomendations: 0,
    }
    this.currentReccomendationId(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.currentReccomendationId(nextProps);
  }

  currentReccomendationId(props) {
    this.setState({
      ratedReccomendations: props.acceptedMovies.length + props.rejectedMovies.length
    })
  }

  get currentReccomendation() {
    return this.state.recommendations[this.state.ratedReccomendations];
  }

  displayRecommendation() {
    const movies = [];

    this.state.recommendations.map((movie) => {
      movies.push([movie.id, movie.imageURL, movie.title, movie.summary, movie.rating]);
    }
    )
    this.passMovieQuantity(movies);
    return movies[this.state.ratedReccomendations];
  }

  passMovieQuantity(movies) {
    const quantity = this.state.recommendations.length;
    return quantity;
  }

  rateMovie(rating) {
    if (rating === 'like') {
      this.props.acceptMovie(this.currentReccomendation)
    } else {
      this.props.rejectMovie(this.currentReccomendation);
    }
  }

  swipedLeft(e, absX) {
    this.clearOverlap();
    if (absX > 100) {
      this.rateMovie('reject');
    }
  }

  swipedRight(e, absX) {
    this.clearOverlap();
    if (absX < -100) {
      this.rateMovie('like');
    }
  }

  clearOverlap() {
    const overlap = document.querySelectorAll('.overlap');
    const overlapArray = Array.apply(null, overlap);

    overlapArray.map( item => {
      item.style.opacity = 0;
    })
  }

  swipingLeft(e, absX) {
    const overlap = document.querySelector('.overlap__reject');
    if (overlap) {
      overlap.style.opacity = (absX/250);
    }
  }
  
  swipingRight(e, absX) {
    const overlap = document.querySelector('.overlap__like');
    if (overlap) {
      overlap.style.opacity = (absX/250);
    }
  }

  render() {
    return (
      <div>
        <Swipeable
          onSwipedRight={this.swipedRight.bind(this)}
          onSwipedLeft={this.swipedLeft.bind(this)}
          onSwipingLeft={this.swipingLeft}
          onSwipingRight={this.swipingRight}>
          <MovieTileComponent
            id={this.state.ratedReccomendations}
            movie={this.displayRecommendation()}
            saveDecision={this.rateMovie.bind(this)}
            acceptedMovies={this.props.acceptedMovies}
            rejectedMovies={this.props.rejectedMovies}
            numberOfMovies={this.passMovieQuantity()}
          />
        </Swipeable>
      </div>
    );
  }
}

export default MoviesComponent
