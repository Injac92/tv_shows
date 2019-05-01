import React from "react";
import TVShowCard from "./TVShowCard";


import { CSSTransitionGroup } from 'react-transition-group'

export default function TVShowList(props) {
 
    
        // renderujemo puno kartica o serijama
        // dovucemo podatke sa neta
        // promenimo state
        // renderujemo karticu
        const newArray = props.tvShows.map((element, index, array)=>{
            return <TVShowCard key={element.id}name={element.name} image={element.image.medium} id={element.id}/>
        })
       
        return <div className="container-fluid">
         <CSSTransitionGroup
          transitionName="example-enter-active"
          transitionEnterTimeout={5000}
          transitionLeaveTimeout={3000}>
          {newArray}
          </CSSTransitionGroup></div>
}

