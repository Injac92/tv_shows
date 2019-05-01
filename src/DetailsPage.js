import React, { Component } from "react";
import Navbar from "./Navbar";

import Error from "./Error";

export default class DetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      loading: true,
      error: false
    };
  }
  componentDidMount() {
    const { id } = this.props.match.params;

    fetch(`http://api.tvmaze.com/shows/${id}?embed[]=seasons&embed[]=cast`)
      .then(response => response.json())
      .then(response => {
        if (response.status === 404) {
          // make the promise be rejected if we didn't get a 200 response
          throw new Error("Not 200 response");
        }
        this.setState({
          data: response,
          loading: false
        });
      })
      .catch(err =>
        this.setState({
          loading: false,
          error: true
        })
      );
  }

  render() {
    if (
      this.props.favoriteTvShows.find(
        e => e.id === parseInt(this.props.match.params.id)
      )
    ) {
      var text = "Remove from favorites";
    } else {
      text = "Save in favorites";
    }

    const {
      name,
      genres,
      premiered,
      officialSite,
      rating,
      image,
      summary
    } = this.state.data;
    // dodajemo loading animaciju
    return this.state.loading ? (
      <div className="spinner-border m-5" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    ) : this.state.error ? (
      <Error />
    ) : (
      <div className="container">
        <div style={{ margin: "10px", display: "float" }}>
          <Navbar />
          <div className="row">
            <div className="col-sm">
              <h3>{name}</h3>
              <ul>
                <b>Genres: </b>
                {genres.map((element, index) => (
                  <li key={index}>{element}</li>
                ))}
              </ul>
              <p>Premiered: {premiered}</p>
              <a href={officialSite}>Official site</a>
              <h4>Rating: {rating.average}</h4>
              <button
                onClick={() =>
                  this.props.saveInFavorites(
                    this.props.match.params.id,
                    this.props.favoriteTvShows,
                    this.state.data
                  )
                }
              >
                {text}
              </button>
            </div>
            <div className="col-sm">
              <img src={image.medium} alt="..." />
            </div>
            <div className="col-sm">
              <ul>
                Seasons:{" "}
                {this.state.data._embedded.seasons.map((element, index) => (
                  <li key={index}>
                    {element.premiereDate} - {element.endDate}{" "}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col-sm-8"
            dangerouslySetInnerHTML={{ __html: summary }}
          />
          <div className="col-sm-4">
            <ul>
              <b>Cast: </b>
              {this.state.data._embedded.cast.map((element, index) => (
                <li key={index}>
                  <img
                    width="30px"
                    height="40px"
                    src={element.person.image.medium}
                    alt="..."
                  />{" "}
                  {element.person.name}{" "}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
