import React,{Component} from 'react';
import MovieList from '../MovieList/MovieList';

class MainComponent extends Component {
    
  movieCategories = [
                      { key: 'CurrentlyViewing', name:'Currently Viewing'},
                      { key:'AlreadyViewed', name:'Already Viewed'},
                      { key:'PlanningToView', name:'Planning To View'}
                    ];

  constructor(props){
    super(props);
    this.state = { 
                   movies:[],
                   apiResponse:'', 
                 }
    this.changeMovieCategory = this.changeMovieCategory.bind(this);
   }

   componentDidMount(){
      fetch('http://localhost:9000/testMovies/')
        .then(res => res.json())
        .then(res => this.setState({movies: res.data}));  
   }

   changeMovieCategory = (newmovie,category) => {

     const newMovies = this.state.movies.map(movie => {
                            if(movie.movie_id === newmovie.movie_id){
                              movie.category = category;
                            }
                            return movie;
                          });
                          
     this.setState({movies:newMovies});                     
   } 

    render(){
      return(
        <div>
           <MovieList 
                      MovieCategories ={this.movieCategories} 
                      movies ={this.state.movies}
                      changeMovieCat ={this.changeMovieCategory} 
            />
        </div>
       )
    }
}


export default MainComponent;