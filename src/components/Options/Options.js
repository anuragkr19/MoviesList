import React,{Component} from 'react';
import '../../../src/App.css';
import Button from '../Button/Button';


function Options(props){
  return(<div>
             <Button onClick ={props.setOpen} />
              { props.open && 
               <select onChange={props.changeMovie}>
                 <option value="CurrentlyViewing">CurrentlyViewing</option>
                 <option value="AlreadyViewed"> AlreadyViewed</option>
                 <option value="PlanningToView">PlanningToView</option>
               </select>
              }
          </div>
        )
   }


export default Options;