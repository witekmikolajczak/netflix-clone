import React, { useRef, useState } from "react";

import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { useAuth } from "../../store/auth-context";

import classes from "./Form.module.css";
const Form = () => {
  const { signup } = useAuth();

  const enteredPasswordConfirm = useRef();
  const enteredEmail = useRef();
  const enteredPassword = useRef();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submitHandler = async (event) => {
    event.preventDefault();
    const email = enteredEmail.current.value;
    const password = enteredPassword.current.value;
    const passwordConfirm = enteredPasswordConfirm.current.value;

    if (password !== passwordConfirm) return setError("Passwords do not match");

    try {
      setError("");
      setLoading(true);
      await signup(email, password, passwordConfirm);
    } catch {
      setLoading(false);
      setError("Failed to create account");
    }
  };
  return (
    <form onSubmit={submitHandler}>
      {error && alert(error)}
      <Input type="email" placeholder="Email" ref={enteredEmail} required />
      <Input
        type="password"
        placeholder="Password"
        ref={enteredPassword}
        required
      />
      <Input
        type="password"
        placeholder="Repeat Password"
        ref={enteredPasswordConfirm}
        required
      />
      <Button className={classes.button} type="submit" disabled={loading}>
        <h2>Sign Up</h2>
      </Button>
    </form>
  );
};
export default Form;
