import React, {Component} from 'react';
import Movie from '../Movie/Movie';
import {Movies} from '../../movies';


class SearchComponent extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            textVal: '',
            renderView:0
        }
        this.submitFunc = this.submitFunc.bind(this);
        this.inputChange = this.inputChange.bind(this);
    }

    submitFunc(event){
        console.log("submitted");
        console.log("Submitted Value",this.state.textVal);
        this.setState({textVal: this.state.textVal,showMovie:true});
        event.preventDefault();
      }

    inputChange(event){
        this.setState({textVal: event.target.value});
    }
    
   render(){
             return(
                        <div>
                            <input value ={this.state.textVal} 
                                   onChange={this.inputChange} 
                                   placeholder="Enter Movie Name" />
                            <input type="submit" 
                                   value="Search Movie" 
                                   onClick={this.submitFunc} />
                           { this.state.showMovie && this.state.textVal && <MovieShowComponent movie={this.state.textVal} /> }    
                        </div>
             )                    
   }
}

const MovieShowComponent = (props) => {
    console.log("Inside MovieShowComponent",props.movie);
    return Movies.filter((movie) => movie.title === props.movie).map(filterMovie => (
               <Movie movie ={filterMovie} />
            )
        )};

export default SearchComponent;