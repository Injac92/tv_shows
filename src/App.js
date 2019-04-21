import React, { Component } from 'react';
import {Switch, Route, Link} from "react-router-dom";

import './App.css';
import TVShowList from "./TVShowList";
import Header from "./Header";

class App extends Component {
  constructor() {
    super()
// inicijalizujemo state
    this.state = {
    tvShows: [],
    tvShowsFiltered: []
    }
  }

  onSearch = (event) => {
  const filtered = this.state.tvShows.filter((element)=>{
    return element.name.includes(event.target.value)
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
  }
    render() {
      return (
        
        <Switch>
          <Route exact path="/" render={()=>{
           return ( <div className="App">
            <Header onSearch={this.onSearch}/>
          <TVShowList  tvShows={this.state.tvShowsFiltered}/>
          </div>)
          }}/>
          <Route exact path="/:id" render={(props)=> <div>{props.match.params.id}</div>} />
        </Switch>
        
      );
    }
}

export default App;
