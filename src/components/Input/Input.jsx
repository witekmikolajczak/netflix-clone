import React from "react";

import classes from './Input.module.scss'
export const Input = React.forwardRef((props, ref) => {
  return <input ref={ref} {...props} className={`${classes.input} ${props.className}`}/>;
});
