import React from 'react';
import classes from '../../App.css';
import Button from '../Button/Button';
import { Movies } from '../../movies';
import MovieCategoryChanger from '../MovieCategoryChanger/MovieCategoryChanger';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";


function Movie(props){
        return(
            <div style={{marginLeft:'295px'}}>
                  <div>
                      <Card style={{maxWidth:230, boxShadow:"0 5px 8px 0 rgba(0,0.3,0,0.7)"}}>
                         {props.movie.title} 
                         <br/><br/>
                         <CardMedia style={{height:"280px"}} image={props.movie.image_url}></CardMedia>
                         {props.movie.release_year} | {props.movie.director}
                      </Card>

                    <MovieCategoryChanger 
                                 movie={props.movie} 
                                 category={props.category} 
                                 changeMovieCat={props.changeMovieCat} 
                    />
                </div>
           </div>
        )
}

export default Movie;