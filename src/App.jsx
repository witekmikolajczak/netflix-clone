import React from "react";
import { Routes, Route } from "react-router-dom";
import { useAuth } from "./store/auth-context";

import SignUp from "./pages/Auth/SignUp";
import SignIn from "./pages/Auth/SignIn";
import HomePage from "./pages/HomePage/HomePage";
import { Profile } from "./pages/Profile/Profile";
import StartPage from "./pages/StartPage/StartPage";

function App() {
  const { isLoggedIn } = useAuth();
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/home" element={isLoggedIn ? <HomePage /> : <SignIn />} />
        <Route
          path="/profile"
          element={isLoggedIn ? <Profile /> : <SignIn />}
        />
      </Routes>
    </React.Fragment>
  );
}

export default App;
