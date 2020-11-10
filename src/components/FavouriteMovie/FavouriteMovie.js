import React, {useState} from 'react';
import Movie from '../Movie/Movie';

const utils = {
    random: (min,max) => min + Math.floor(Math.random() * (max - min + 1))
}

function FavouriteMovie(props){
    //useState is a Hook that lets you add React state to function components
    const [movieId,setMovieId] = useState(utils.random(1,9));
    const favMovie = props.movies.filter((movie)=> {
        return Number.parseInt(movie.movie_id) === movieId; 
    })

    return (
        <div>
        <Movie movie={favMovie[0]}/>
        </div>
    )         
}


export default FavouriteMovie;