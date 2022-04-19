import React from "react";
import { createPortal } from "react-dom";

import classes from "./MovieDetails.module.scss";

const Backdrop = (props) => {
  console.log(props.onClick);
  return <div className={classes.backdrop} onClick={props.onClick}></div>;
};

const MovieModal = ({ movieData, ...props }) => {
  console.log(movieData);
  return (
    <div className={classes.container} onClick={props.onClick}>
      {movieData.map((data) => (
        <p>{data.title}</p>
      ))}
    </div>
  );
};

export const MovieDetails = (props) => {
  return (
    <React.Fragment>
      {createPortal(
        <Backdrop onClick={props.onClick} />,
        document.getElementById("backdrop-root")
      )}
      {createPortal(
        <MovieModal onClick={props.onClick} movieData={props.movieData} />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};
