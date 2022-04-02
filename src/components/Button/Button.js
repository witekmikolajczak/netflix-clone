import React from "react";
import PropTypes from "prop-types";
import "./Button.module.css";
export const Button = ({ onClick, children, className, type, props }) => {
  return (
    <button type={type} onClick={onClick} className={className} {...props}>
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
