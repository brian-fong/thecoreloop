import { createContext, useState } from "react";

type UserDataProps = {
  currUser: any;
  setCurrUser: (currUser: any) => void;
  gameData: any;
  setGameData: (gameData: any) => void;
};

interface Props {
  children: React.ReactNode;
}

export const UserData = createContext<UserDataProps>({
  currUser: null,
  setCurrUser: () => {},
  gameData: null,
  setGameData: () => {},
});

function Context({ children }: Props) {
  const [currUser, setCurrUser] = useState();
  const [gameData, setGameData] = useState();
  return (
    <UserData.Provider value={{ currUser, setCurrUser, gameData, setGameData }}>
      {children}
    </UserData.Provider>
  );
}

export default Context;
