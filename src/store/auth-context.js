import React, { useContext, createContext, useState, useEffect } from "react";
import { auth } from "../firebase/firebase";

export const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const signup = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  //run when mount component
  useEffect(() => {
    //create user for us
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(true);
    });

    //return method from onAuthStateChange
    return unsubscribe;
  }, []);

  const contextValue = {
    user,
    signup,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
