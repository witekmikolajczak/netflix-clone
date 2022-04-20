import React from "react";
import { createPortal } from "react-dom";

import classes from "./MovieDetails.module.scss";

const IMAGE_URL = `https://image.tmdb.org/t/p/w300`;

const Backdrop = (props) => {
  console.log(props.onClick);
  return <div className={classes.backdrop} onClick={props.onClick}></div>;
};

const MovieModal = ({ movieData, ...props }) => {
    const sectionStyle = {
        width:'100%',
        height:'100%',
        backgroundImage: `url(${IMAGE_URL}${movieData.image})`
    }
  return (
    <div className={classes.container}  onClick={props.onClick}>
        <div className={classes.wrapper}>
            <img src={`${IMAGE_URL}${movieData.image}`}/>
            <h1>{movieData.title}</h1>
            <p>{movieData.description}</p>
        </div>

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
