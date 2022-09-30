import React, { createContext } from "react";

export const TeamContext = createContext();

const TeamContextProvider = (props) => {
  const teams = [
    { id: 1, name: "CSK", imgURL: "teams/CSK.png" },
    { id: 2, name: "DC", imgURL: "teams/DC.png" },
    { id: 3, name: "GT", imgURL: "teams/GT.png" },
    { id: 4, name: "KKR", imgURL: "teams/KKR.png" },
    { id: 5, name: "LSG", imgURL: "teams/LSG.png" },
    { id: 6, name: "MI", imgURL: "teams/MI.png" },
    { id: 7, name: "PBKS", imgURL: "teams/PBKS.png" },
    { id: 8, name: "RCB", imgURL: "teams/RCB.png" },
    { id: 9, name: "RR", imgURL: "teams/RR.png" },
    { id: 10, name: "SRH", imgURL: "teams/SRH.png" },
  ];
  return (
    <TeamContext.Provider value={{ teams }}>
      {props.children}
    </TeamContext.Provider>
  );
};

export default TeamContextProvider;
