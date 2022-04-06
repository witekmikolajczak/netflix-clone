import React, { Fragment } from "react";

import { Navbar } from "../Navbar/Navbar";
export const Card = ({ children, ...props }) => {
  return (
    <Fragment>
      <Navbar />
      {children}
    </Fragment>
  );
};
