import React, { Component } from 'react';
import { render } from 'react-dom';
import DecisionComponent from './decisionComponent';

class MovieTileComponent extends Component {
  constructor(props) {
    super(props);
  }

  checkId() {
    const id = this.props.id; 
    return (id < this.props.numberOfMovies) ? this.displayMovieHtml() : this.displaySummaryHtml();
  };

  listAcceptedMovies() {
    let listAcceptedMovies = [];
    this.props.acceptedMovies.map( (movie, index) => {
      if (movie) {
        listAcceptedMovies.push(movie.title + ' (' + movie.rating + ')');
        listAcceptedMovies.join(', ');
      }
    });
    return listAcceptedMovies.join(', ');
  }

  listRejectedMovies() {
    let listRejectedMovies = []; 
    this.props.rejectedMovies.map( (movie, index) => {
      if (movie) {
        listRejectedMovies.push(movie.title + ' (' + movie.rating + ')');
        listRejectedMovies.join(', ');
      }
    });
    return listRejectedMovies.join(', ');
  }

  displaySummaryHtml() {
    return (
      <div className="container">
        <div className="movie__summary" style={{opacity: 1}}>
          <h1 className="headline__primary">Summary</h1>
          <h2 className="headline__secondary">Movies you liked:</h2>
          <p className="text">{this.listAcceptedMovies()}</p>
          <h2 className="headline__secondary">Movies you rejected:</h2>
          <p className="text">{this.listRejectedMovies()}</p>
        </div>
      </div>
      )
  };

  displayMovieHtml() {
    return (
      <div className="container">
        <div className="overlap overlap__reject">
          <h1 className="headline__primary">Reject</h1>
        </div>
        <div className="overlap overlap__like">
          <h1 className="headline__primary">Like</h1>
          </div>
        <div className="movie__tile">
          <div className="row">
            <div className="col-12">
              <h1 className="movie__headline headline__primary">
                {this.props.movie[2]} ({this.props.movie[4]}/10)
              </h1>
            </div>
          </div>

          <div className="row">
            <div className="movie__image col-lg-5 col-md-12">
              <img src={this.props.movie[1]} alt="movie-image" />
            </div>
            <div className="movie__description col-lg-7 col-md-12">
              <h1 className="movie__headline headline__secondary">
                Movie description:
              </h1>
              <p className="text">
                {this.props.movie[3]}
              </p>
            </div>
          </div>

          <div className="row">
            <div className="movie__decision">
              <DecisionComponent
                onClick={ () => this.props.saveDecision('like')}
                role='like'
              />
              <DecisionComponent
                onClick={ () => this.props.saveDecision('reject')}
                role='reject'
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div>
        { this.checkId() }
      </div>
    );
  };
};

export default MovieTileComponent
