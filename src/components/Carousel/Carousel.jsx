import React from "react";
import { Tile } from "../../pages/HomePage/Tile";
import classes from "./Carousel.module.scss";

export const CarouselItem = ({ children, width }) => {
  return (
    <div className={classes.carouselItem} style={{ width: width }}>
      {children}
    </div>
  );
};

export const Carousel = ({ children }) => {
  return (
    <div className={classes.carousel}>
      <div className={classes.inner} style={{ transform: "translateX(-0%" }}>
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
    </div>
  );
};
