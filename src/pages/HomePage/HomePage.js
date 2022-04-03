import React from "react";

import { Navbar } from "../../components/Navbar/Navbar";
import { Button } from "../../components/Button/Button";
import { Tile } from "./Tile";

import classes from "./HomePage.module.css";

const DUMMY_DATA = [
  {
    id: 1,
    title: "nazwa",
    description: "Opis filmu",
  },
];
const tiles = () => {
  return (
    <div className={classes.tiles}>
      <Tile data={DUMMY_DATA} />
    </div>
  );
};
const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className={classes["fill-container"]}>
        <img
          alt="title logo"
          className={classes["title-logo"]}
          src="https://occ-0-4812-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABeSVmri8RF5cusFjQbg0uswbOqdn1IcNw5yia17QTadprxqnBBG39Q_lLzTkvtAZydYQU40-BFgGZ427tJWFvCQQULzUTgu9Z2sD.webp?r=899"
        ></img>
        <div className={classes.text}>
          Ameryka, XIX wiek. Wychowywane przez surową matkę siostry Jo, Meg,
          Beth i&nbsp;Amy dzielą się ze&nbsp;sobą bolączkami dorastania,
          rodzinnymi tragediami i&nbsp;osobistymi ambicjami.
        </div>
        <div className={classes["buttons-container"]}>
          <Button className={classes.button}>Odtwórz teraz</Button>
          <Button className={classes.button}>Więcej informacji</Button>
        </div>
        {tiles()}
      </div>
    </div>
  );
};
export default HomePage;
