import React from "react";
import { useNavigate } from "react-router-dom";

import { Navbar } from "../../components/Navbar/Navbar";
import { useAuth } from "../../store/auth-context";

import "./HomePage.module.css";
const HomePage = () => {
  return (
    <div>
      <Navbar />
      <h1>HomePage</h1>
    </div>
  );
};
export default HomePage;
