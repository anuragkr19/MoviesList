import React, { Component } from 'react';
import NewButton from '../Button/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

class MovieCategoryChanger extends Component{

  constructor(props){   
    super(props);
    this.state = {
      value: this.props.category,
      showOption:false
    }
    this.changeMovieCategory = this.changeMovieCategory.bind(this);
    this.showOption = this.showOption.bind(this);
  }
  
  changeMovieCategory = event => {
    this.setState({value: event.target.value});
    this.props.changeMovieCat(this.props.movie,event.target.value);
  }

  showOption =() => {
    this.setState({showOption: !this.state.showOption});
  }

  render(){
    return(<div style={{paddingBottom:"20px",paddingTop:"10px"}}>
              <NewButton onClick ={this.showOption} />
              { this.state.showOption &&
                <Select value={this.state.value} onChange={this.changeMovieCategory}>
                  <MenuItem value="CurrentlyViewing">Currently Viewing</MenuItem>
                  <MenuItem value="AlreadyViewed"> Already Viewed</MenuItem>
                  <MenuItem value="PlanningToView">Planning To View</MenuItem>
               </Select>
              }
           </div>
          )
     }
}



export default MovieCategoryChanger;