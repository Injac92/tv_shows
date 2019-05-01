import React, { Component } from 'react';
import {Switch, Route} from "react-router-dom";

import './App.css';
import TVShowList from "./TVShowList";
import Header from "./Header";
import Home from "./HomePage";
import DetailsPage from "./DetailsPage";
import {saveInFavorites, checkLocalStorage} from "./service/localStorage";
import Error from "./Error";
import Navbar from "./Navbar";

class App extends Component {
  constructor() {
    super()
// inicijalizujemo state
    this.state = {
    tvShows: [],
    tvShowsFiltered: [],
    favoriteTvShows: []
    }
    this.saveInFavorites = saveInFavorites.bind(this);
    this.checkLocalStorage = checkLocalStorage.bind(this);
  }

  onSearch = (event) => {
  const filtered = this.state.tvShows.filter((element)=>{
    return element.name.toLowerCase().includes(event.target.value.toLowerCase())
  })
  this.setState({
    tvShowsFiltered: filtered
  })
  }


  componentDidMount(){
    // dovlacimo podatke
    fetch("http://api.tvmaze.com/shows")
    .then(response=>{
        // konverzija iz json-a u js
        return response.json()
    })
    .then(data=>{

        // ubacujemo podatke u state
        this.setState({
            tvShows:data,
            tvShowsFiltered:data
        })
    })
    .catch(error=> console.log(error))

    // dovlacimo podatke iz local storage
    this.checkLocalStorage();
  }
    render() {

      // console.log(this.state.tvShows);
      const images = [];
      if(this.state.tvShows.length>0) {
        const length = this.state.tvShows.length;
        for(var i=0; i < 5; i++) {
          images.push(this.state.tvShows[Math.floor(Math.random()*length)].image.original);
        }
      }
      


      return (
       
          <Switch>
            <Route  exact path="/" render={()=>{
              return ( <div className="container" id="home">
                <Navbar />
                <Home images={images}/>
              </div>
              )
            }} />

            <Route exact path="/series" render={()=>{
            return ( <div className="App container" >
              <Navbar />
              <Header onSearch={this.onSearch}/>
              <TVShowList  tvShows={this.state.tvShowsFiltered}/>
            </div>)
            }}/>

            <Route exact path="/favorites" render={()=>{
            return ( <div className="App container">
              <Navbar />
              <div className="navbar">
              <h3>List of all favorites TV-Shows</h3> 
            </div>
            <TVShowList  tvShows={this.state.favoriteTvShows}/>
            </div>)
            }}/>

            <Route exact path="/:id" render={(props)=> <DetailsPage favoriteTvShows={this.state.favoriteTvShows} saveInFavorites={this.saveInFavorites} {...props}/>}  />

            <Route component={Error}/>
          </Switch>
   
        
        
      );
    }
}

export default App;
