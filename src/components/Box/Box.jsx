import React from "react";

import classes from "./Box.module.scss";
export const Box = (props) => {
  return (
    <div className={`${classes.box} ${props.className}`}>{props.children}</div>
  );
};
