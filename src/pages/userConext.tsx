"use client";
import { createContext, useContext, useState } from "react";

const UserContext = createContext({
  user: {},
  setUser: (): object => {},
});

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState("");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useGlobalContext = () => useContext(UserContext);
