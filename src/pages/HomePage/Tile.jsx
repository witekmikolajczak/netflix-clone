import React, { useEffect, useState } from "react";
import { useMovie } from "../../hooks/useMovie";

import { MovieDetails } from "./MovieDetails/MovieDetails";

import classes from "./Tile.module.scss";

const IMAGE_URL = `https://image.tmdb.org/t/p/w300`;
export const Tile = (props) => {
  const [movieData, setMovieData] = useState();
  const [showMovieDetails, setShowMovieDetails] = useState(false);
  const movie = useMovie();

  useEffect(() => {
    movie.then((value) => {
      const data = value.results.map((item) => ({
        id: item.id,
        title: item.title,
        image: item.poster_path,
        description: item.overview,
        popularity: item.popularity,
        vote_avg: item.vote_average,
        vote_count: item.vote_count,
      }));
      setMovieData(data);
    });
  }, []);

  console.log(showMovieDetails);
  return (
    <div
      className={classes.container}
      onClick={() => setShowMovieDetails(!showMovieDetails)}
    >
      {showMovieDetails && (
        <MovieDetails onClick={() => setShowMovieDetails(true)} />
      )}
      {movieData !== undefined &&
        movieData.map((data) => (
          <div className={classes.item} key={data.id}>
            <img src={`${IMAGE_URL}${data.image}`} alt="a" />
          </div>
        ))}
    </div>
  );
};
