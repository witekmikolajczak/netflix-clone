import React from "react";

import classes from "./Layout.module.css";
const Layout = (props) => {
  return (
    <div className={`${classes.box} ${props.className}`}>{props.children}</div>
  );
};
export default Layout;
