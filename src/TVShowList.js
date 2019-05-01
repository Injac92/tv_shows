import React from "react";
import TVShowCard from "./TVShowCard";

export default function TVShowList(props) {
  // renderujemo puno kartica o serijama
  // dovucemo podatke sa neta
  // renderujemo karticu
  const newArray = props.tvShows.map((element, index, array) => {
    return (
      <TVShowCard
        key={element.id}
        name={element.name}
        image={element.image.medium}
        id={element.id}
      />
    );
  });

  return <div className="container-fluid">{newArray}</div>;
}
