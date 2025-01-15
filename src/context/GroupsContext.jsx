import React, { createContext, useState, useContext, useEffect } from "react";

const GroupsContext = createContext();

export const useGroups = () => {
  return useContext(GroupsContext);
};

export const GroupsProvider = ({ children }) => {
  const [groups, setGroups] = useState(() => {
    // Hämta grupper från localStorage vid start
    const savedGroups = localStorage.getItem("groups");
    return savedGroups ? JSON.parse(savedGroups) : [];
  });

  useEffect(() => {
    // Spara grupper i localStorage vid varje uppdatering
    localStorage.setItem("groups", JSON.stringify(groups));
  }, [groups]);

  return (
    <GroupsContext.Provider value={{ groups, setGroups }}>
      {children}
    </GroupsContext.Provider>
  );
};
