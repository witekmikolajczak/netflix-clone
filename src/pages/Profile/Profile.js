import React, { useRef } from "react";
import { useAuth } from "../../store/auth-context";

import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { Box } from "../../components/Box/Box";
import { Card } from "../../components/Card/Card";

import classes from "./Profile.module.css";

export const Profile = () => {
  const { changePassword } = useAuth();
  const enteredPassword = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    changePassword(enteredPassword.current.value);
    enteredPassword.current.value = "";
  };

  return (
    <Card>
      <div className={classes.content}>
        <Box className={classes.box}>
          <h1 className={classes.h1}>Change Password</h1>
          <form onSubmit={submitHandler}>
            <Input
              type="password"
              placeholder="Password"
              name="password"
              ref={enteredPassword}
            />
            <Button className={classes.button}>Submit</Button>
          </form>
        </Box>
      </div>
    </Card>
  );
};
