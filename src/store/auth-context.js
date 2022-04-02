import React, { useContext, createContext, useState, useEffect } from "react";
import { auth } from "../firebase/firebase";

export const AuthContext = createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);

  const userIsLoggedIn = !!token;

  const signup = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  const login = (email, password) => {
    auth.signInWithEmailAndPassword(email, password).then((userCredential) => {
      const user = userCredential.user;
      user.getIdToken().then((token) => {
        setToken(token);
        localStorage.setItem("token", token);
      });
    });
  };

  const logout = () => {
    auth.signOut();
    localStorage.removeItem("token");
  };

  const contextValue = {
    isLoggedIn: userIsLoggedIn,
    signup,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
