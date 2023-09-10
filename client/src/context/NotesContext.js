import { createContext } from "react";

export const NoteContext = createContext();

export const NoteContextProvider = ({ children }) => {
  return <NoteContext.Provider>{children}</NoteContext.Provider>;
};
