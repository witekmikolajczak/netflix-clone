import React from "react";
import { createPortal } from "react-dom";

import classes from "./MovieDetails.scss";

const Backdrop = (props) => {
  console.log(props.showMovieDetails);
  return (
    <div className={classes.backdrop} onClick={props.showMovieDetails}></div>
  );
};

const MovieModal = (props) => {
  return <div className={classes.container}></div>;
};

export const MovieDetails = ({ showMovieDetails }) => {
  console.log("clicked");
  return (
    <React.Fragment>
      {createPortal(
        <Backdrop showMovieDetails={showMovieDetails} />,
        document.getElementById("backdrop-root")
      )}
      {createPortal(
        <MovieModal onClick={showMovieDetails} />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};
