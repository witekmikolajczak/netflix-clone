import React from "react";
import { Routes, Route } from "react-router-dom";

import SignUp from "./pages/Auth/SignUp";
import SignIn from "./pages/Auth/SignIn";
import HomePage from "./pages/HomePage/HomePage";
import StartPage from "./pages/StartPage/StartPage";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
