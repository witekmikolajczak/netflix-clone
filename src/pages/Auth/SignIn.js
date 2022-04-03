import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../store/auth-context";
import { Box } from "../../components/Box/Box";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";

import classes from "./Sign.module.css";
const SignIn = () => {
  const { login, isLoggedIn, user } = useAuth();

  // const enteredPasswordConfirm = useRef();
  const enteredEmail = useRef();
  const enteredPassword = useRef();
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submitHandler = async (event) => {
    event.preventDefault();
    const email = enteredEmail.current.value;
    const password = enteredPassword.current.value;

    try {
      setError("");
      setLoading(true);
      await login(email, password);
      navigate("/home");
    } catch {
      setLoading(false);
      setError("Failed to create account");
    }
  };
  return (
    <div className={classes.content}>
      <Box className={classes.box}>
        <h1>Sign In</h1>
        <form onSubmit={submitHandler}>
          {error && alert(error)}
          <Input type="email" placeholder="Email" ref={enteredEmail} required />
          <Input
            type="password"
            placeholder="Password"
            ref={enteredPassword}
            required
          />
          <Link to="/register">
            <p>Create new account</p>
          </Link>
          <Button className={classes.button} type="submit" disabled={loading}>
            <h2>Sign In</h2>
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default SignIn;
