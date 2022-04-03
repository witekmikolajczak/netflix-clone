import React from "react";

import classes from "./Tile.module.css";

export const Tile = ({ data }) => {
  console.log(data);
  return (
    <div className={classes.tile}>
      {data.map((data) => {
        <h1>{data.title}</h1>;
      })}
    </div>
  );
};
