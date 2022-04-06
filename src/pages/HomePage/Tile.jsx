import React, { useEffect, useState } from "react";
import { useMovie } from "../../hooks/useMovie";

import { Carousel, CarouselItem } from "../../components/Carousel/Carousel";

import classes from "./Tile.module.scss";

export const Tile = () => {
  const [movieData, setMovieData] = useState();
  const [loading, setLoading] = useState(false);
  const movie = useMovie();

  useEffect(() => {
    movie.then((value) => {
      const data = value.results.map((item) => ({
        id: item.id,
        title: item.title,
        image: item.backdrop_path,
        description: item.overview,
        popularity: item.popularity,
        vote_avg: item.vote_average,
        vote_count: item.vote_count,
      }));
      setMovieData(data);
    });
  }, []);
  console.log(movieData);
  return (
    <div className={classes.wrapper}>
      {movieData !== undefined &&
        movieData.map((data) => (
          <div className={classes.tile}>
            <h1>{data.title}</h1>
          </div>
        ))}
    </div>
  );
};
