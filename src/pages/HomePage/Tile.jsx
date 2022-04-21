import React, { useEffect, useState } from "react";
import { useMovie } from "../../hooks/useMovie";

import { MovieDetails } from "./MovieDetails/MovieDetails";

import {IMAGE_URL} from "../../hooks/useMovie";

import classes from "./Tile.module.scss";


export const Tile = (props) => {
  const [movieData, setMovieData] = useState();
  const [showMovieDetails, setShowMovieDetails] = useState(false);
  const [movieClick, setMovieClick] = useState()

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

  return (
    <div
      className={classes.container}
      onClick={() => setShowMovieDetails(!showMovieDetails)}
    >
      {movieData !== undefined &&
        movieData.map((data) => (
          <div className={classes.item} key={data.id} onClick={()=> setMovieClick(data)}>
            <img src={`${IMAGE_URL}${data.image}`} alt="a" />
            {showMovieDetails && <MovieDetails
                onClick={() => setShowMovieDetails(true)}
                movieData={movieClick}
            />}

          </div>
        ))}
      {/*{showMovieDetails && (*/}
      {/*    <MovieDetails*/}
      {/*        onClick={() => setShowMovieDetails(true)}*/}
      {/*        movieData={movieData}*/}
      {/*    />*/}
      {/*)}*/}
    </div>
  );
};
