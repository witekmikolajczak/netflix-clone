import React from "react";
import { Link } from "react-router-dom";

import { Input } from "../../components/Input/Input";
import { Box } from "../../components/Box/Box";
import { Button } from "../../components/Button/Button";

import classes from "./StartPage.module.scss";
const StartPage = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>
        <Box className={classes.box}>
          <form>
            <Input type='text' placeholder='Email'/>
            <Button>Submit</Button>
          </form>
          <Link to='/login'>
            <p>Log in</p>
          </Link>
          
        </Box>
      </div>
    </div>
  );
};

export default StartPage;
