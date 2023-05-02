import { createContext, useState } from "react";

export const UserData = createContext(null);

function Context({ children }) {
  const [currUser, setCurrUser] = useState();
  const [gameData, setGameData] = useState();
  return (
    <UserData.Provider value={{ currUser, setCurrUser }}>
      {children}
    </UserData.Provider>
  );
}

export default Context;
