import React, { createContext, useState } from "react";

// On déclare la création du context
const GlobalContext = createContext();

// on l'applique à tout les enfants
export const GlobalContextProvider = ({ children }) => {
  // state pour l'ouverture des alertes et le message
  const [alert, setAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState(
    "Oups... Un message dalerte doit s'afficher"
  );

  return (
    <GlobalContext.Provider value={{ alert, setAlert, alertMsg, setAlertMsg }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
