import React,{ Component } from 'react';
import MovieCategories from '../MovieCategories/MovieCategories';

class MovieList extends Component {

  constructor(props){
    super(props);
    this.state = {}
  }

  render(){
    return(
      <div>
          <MovieCategories movieCategories={this.props.MovieCategories} 
                           movies={this.props.movies} 
                           changeMovieCat={this.props.changeMovieCat}
          />
      </div>
    )
  }
}

export default MovieList;