import React from "react";

export default function Home(props){

   
        return(
            <div>               
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-interval="2000">
                            <img src={props.images[0]} className="d-block w-100" alt="..."></img>
                        </div>
                        <div className="carousel-item" data-interval="2000">
                            <img src={props.images[1]} className="d-block w-100" alt="..."></img>
                        </div>
                        <div className="carousel-item" data-interval="2000">
                            <img src={props.images[2]} className="d-block w-100" alt="..."></img>
                        </div>
                        <div className="carousel-item" data-interval="2000">
                            <img src={props.images[3]} className="d-block w-100" alt="..."></img>
                        </div>
                        <div className="carousel-item" data-interval="2000">
                            <img src={props.images[4]} className="d-block w-100" alt="..."></img>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>  
            </div>
        )
    }
    
