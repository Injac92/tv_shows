export function saveInFavorites(id, favoriteTvShows, data) {
  // is there anything in localStorage
  if (favoriteTvShows.length > 0) {
    // check is there an id inside
    if (
      favoriteTvShows.find(e => parseInt(e.id) === parseInt(id)) === undefined
    ) {
      // if there is not id inside
      const favoriteTvShows = JSON.parse(
        localStorage.getItem("favoriteTvShows")
      );
      favoriteTvShows.push({ id, ...data });
      localStorage.setItem("favoriteTvShows", JSON.stringify(favoriteTvShows));
      this.checkLocalStorage();
    } else {
      // if there is id inside, remove id
      var tvShows = JSON.parse(localStorage.getItem("favoriteTvShows"));
      tvShows = tvShows.filter(tvShow => parseInt(tvShow.id) !== parseInt(id));
      localStorage.setItem("favoriteTvShows", JSON.stringify(tvShows));
      this.checkLocalStorage();
    }
  } else {
    // if favoriteTvShows does not exist
    const favoriteTvShows = [];
    favoriteTvShows.push({ id, ...data });
    localStorage.setItem("favoriteTvShows", JSON.stringify(favoriteTvShows));
    this.checkLocalStorage();
  }
}

export function checkLocalStorage() {
  if (localStorage.getItem("favoriteTvShows") !== null) {
    // if there is smth in local storage set the state
    const favoriteTvShowsFromLocalStorage = JSON.parse(
      localStorage.getItem("favoriteTvShows")
    );
    this.setState({
      favoriteTvShows: favoriteTvShowsFromLocalStorage
    });
  } else {
    this.setState({
      favoriteTvShows: []
    });
  }
}
