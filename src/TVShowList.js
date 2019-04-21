import React, {Component} from "react";
import TVShowCard from "./TVShowCard";

export default function TVShowList(props) {
 

    
    // render
    
        // renderujemo puno kartica o serijama
        // dovucemo podatke sa neta
        // promenimo state
        // renderujemo karticu
        const newArray = props.tvShows.map((element, index, array)=>{
            return <TVShowCard key={element.id}name={element.name} image={element.image.medium} id={element.id}/>
        })

        // const testArray = [7,8,9];
        // const newTestArray = testArray.map((element, index, array)=>{
        //     // element = element+1;
        //     console.log(element, index,array)
        //     return element;
        // })
       
        return <div class="container-fluid" >{newArray}</div>
    }

