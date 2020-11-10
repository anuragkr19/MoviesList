import React from 'react';
import Movie from '../Movie/Movie';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

function MovieCategory(props){

  const moviesWithCateogry = props.movies.filter(movie => movie.category === props.category.key);
  
  return(
         <Container>
         <div>
            <div> 
               <Typography color="textPrimary" variant="h4" align="center">
                <h4> { props.category.name } </h4>
                </Typography>
                <hr />
            </div>
            <div>
                {
                  moviesWithCateogry.map(movie => (
                    <Movie key ={movie.movie_id} 
                           movie={movie} 
                           category ={movie.category}
                           changeMovieCat={props.changeMovieCat} 
                    />
                  ))
                }
            </div>
         </div>
         </Container>
        );
}


export default MovieCategory;