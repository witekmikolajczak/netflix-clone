import React from "react";
import { useMovie } from "../../hooks/useMovie";
import classes from "./Tile.module.css";

const api_key = "9eaaa2e6544e003ba31ef9f40b90b21b";

export const Tile = () => {
  const response = async () => {
    await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`
    )
      .then((resposne) => resposne.json())
      .then((data) => {
        console.log(data);
        return data;
      });
  };
  return <div className={classes.tile}></div>;
};
