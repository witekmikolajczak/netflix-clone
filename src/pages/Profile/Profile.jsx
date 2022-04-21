import React, { useRef } from "react";
import { useAuth } from "../../store/auth-context";

import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { Box } from "../../components/Box/Box";
import { Card } from "../../components/Card/Card";
import {UploadImage} from "../../components/UploadImage/UploadImage";

import classes from "./Profile.module.scss";

export const Profile = () => {
  const { changePassword } = useAuth();
  const enteredPassword = useRef();
  const repeatEnteredPassword = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    if (
      enteredPassword.current.value === repeatEnteredPassword.current.value &&
      enteredPassword.current.value.length >= 6
    ) {
      changePassword(enteredPassword.current.value);
      alert("Password changed");
    } else {
      alert(
        "Password is not this same. Passwprd must have at least 6 characters"
      );
    }
    enteredPassword.current.value = "";
    repeatEnteredPassword.current.value = "";
  };

  return (
    <Card>
      <div className={classes.wrapper}>
        <div className={classes.changeImageProfile}>
          <UploadImage/>
        </div>
        <div className={classes.content}><Box className={classes.box}>
          <h1 className={classes.h1}>Change Password</h1>
          <form onSubmit={submitHandler}>
            <Input
                type="password"
                placeholder="Password"
                name="password"
                ref={enteredPassword}
            />
            <Input
                type="password"
                placeholder="Repeat password"
                name="password"
                ref={repeatEnteredPassword}
            />
            <Button className={classes.button}>Submit</Button>
          </form>
        </Box></div>
      </div>

    </Card>
  );
};
