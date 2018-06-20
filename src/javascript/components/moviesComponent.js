import React, { Component } from 'react';
import MovieTileComponent from './movieTileComponent';
import Swipeable from 'react-swipeable'

class MoviesComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recommendations: this.props.movies,
      ratedReccomendations: 0,
    }
  }

  get currentReccomendation() {
    return this.state.recommendations[this.state.ratedReccomendations];
  }

  displayRecommendation() {
    const movies = [];

    this.state.recommendations.forEach((movie) => {
      movies.push([movie.id, movie.imageURL, movie.title, movie.summary, movie.rating]);
    }
    )
    return movies[this.state.ratedReccomendations];
  }

  rateMovie = rating => {
    let { ratedReccomendations } = this.state; 
    if (rating === 'like') {
      this.props.acceptMovie(this.currentReccomendation)
    } else {
      this.props.rejectMovie(this.currentReccomendation);
    }
    this.setState({
      ratedReccomendations: ratedReccomendations += 1,
    })
  }

  swipedLeft = (e, absX) => {
    this.clearOverlap();
    if (absX > 100) {
      this.rateMovie('reject');
    }
  }

  swipedRight = (e, absX) => {
    this.clearOverlap();
    if (absX < -100) {
      this.rateMovie('like');
    }
  }

  clearOverlap() {
    const overlap = document.querySelectorAll('.overlap');
    const overlapArray = Array.apply(null, overlap);

    overlapArray.forEach( item => {
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

  resetProgress = () => {
    this.props.resetAccepted();
    this.props.resetRejected();
    this.setState({
      ratedReccomendations: 0,
    })
  }

  render() {
    const { recommendations, ratedReccomendations } = this.state;
    return (
      <div>
        <Swipeable
          onSwipedRight={this.swipedRight}
          onSwipedLeft={this.swipedLeft}
          onSwipingLeft={this.swipingLeft}
          onSwipingRight={this.swipingRight}>
          <MovieTileComponent
            id={ratedReccomendations}
            movie={this.displayRecommendation()}
            saveDecision={this.rateMovie}
            acceptedMovies={this.props.acceptedMovies}
            rejectedMovies={this.props.rejectedMovies}
            numberOfMovies={recommendations.length}
            resetProgress={this.resetProgress}
          />
        </Swipeable>
      </div>
    );
  }
}

export default MoviesComponent
