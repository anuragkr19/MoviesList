import React from 'react';
import MovieCategory from '../MovieCategory/MovieCategory';
import Box from '@material-ui/core/Box';


function MovieCategories(props){
    return(
          <Box component="span" color="text.primary">
           <div>
              { props.movieCategories.map(movieCat => (
                   <MovieCategory key={movieCat.key} 
                                  category={movieCat} 
                                  movies={props.movies}
                                  changeMovieCat={props.changeMovieCat} 
                   />  
                 ))
              }
           </div>
           </Box>
          )
 }

export default MovieCategories;