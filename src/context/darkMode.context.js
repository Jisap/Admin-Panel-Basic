import { createContext, useReducer } from "react";
import DarkModeReducer from "./darkModeReducer";

const INITIAL_STATE = {
  darkMode: false,
};

export const DarkModeContext = createContext(INITIAL_STATE);                // Context con un estado inicial

export const DarkModeContextProvider = ({ children }) => {                  // Proveedor del context a los childrens

  const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);     // Reducer para modificar el state

  return (
    <DarkModeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>   
      {children}
    </DarkModeContext.Provider>
  );
};