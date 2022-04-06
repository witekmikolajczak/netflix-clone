import React from "react";
import PropTypes from "prop-types";
import classes from "./Button.module.scss";
export const Button = ({ onClick, children, className, type, props }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${className} ${classes.button}`}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.any,
  children: PropTypes.node,
  type: PropTypes.any,
};
