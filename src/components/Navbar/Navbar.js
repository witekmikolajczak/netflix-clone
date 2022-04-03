import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../store/auth-context";

import { Button } from "../Button/Button";

import classes from "./Navbar.module.css";
export const Navbar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const logoutHandler = () => {
    logout();
    navigate("/login");
  };
  return (
    <header className={classes.header}>
      <h1 className={classes.h1}>Netflix</h1>

      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Button onClick={logoutHandler}>Logout</Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
