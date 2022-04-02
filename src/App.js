import React from "react";
import { Routes, Route } from "react-router-dom";

import SignUp from "./pages/SignUp/SignUp";
import HomePage from "./pages/Main/HomePage";
import StartPage from "./pages/StartPage/StartPage";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/main" element={<HomePage />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
