import React from "react";
import useAppStatus from "./useAppStatus";

export const AppStatusContext = React.createContext({
  updateAvailable: false,
  offLineReady: false,
  registration: null,
  installPrompt: null,
});

import { ReactNode } from "react";

interface AppStatusProviderProps {
  children: ReactNode;
}

export const AppStatusProvider = ({ children }: AppStatusProviderProps) => {
  const appUpdateAvailable = useAppStatus();
  return (
    <AppStatusContext.Provider value={appUpdateAvailable}>
      {children}
    </AppStatusContext.Provider>
  );
};
