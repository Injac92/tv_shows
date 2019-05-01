import React from "react";
import {Link} from "react-router-dom";


export default function TVShow(props){

    const slicedName = props.name.length > 20 ? props.name.slice(0,20) + "..." : props.name

    return (
       
    <Link to={`/${props.id}`}>
    <div  className="card sm-12 md-6 lg-4 xl-3" style={{display:"inline-block"}} >
        <img src={props.image} className="card-img-top" alt="..." />
         <div className="card-body">
            <p className="card-title">{slicedName}</p>
            
             </div>
                </div>
             </Link>
        
    )    
}