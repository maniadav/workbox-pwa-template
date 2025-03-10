"use client";
import React, { useContext, useState } from "react";

import FloatingMessage from "./FloatingMessage";
import { AppStatusContext } from "./AppStatusProvider";

export default function AppUpdate() {
  const { updateAvailable, registration, installPrompt } =
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    useContext<any>(AppStatusContext);
  const [showInstallPrompt, setShowInstallPrompt] = useState<boolean>(true);
  const [showAppUpdate, setShowAppUpdate] = useState<boolean>(true);

  if (showAppUpdate && updateAvailable && registration) {
    const updateServiceWorker = () => {
      if (registration.waiting) {
        registration.waiting.postMessage({ type: "SKIP_WAITING" });
      }
    };

    return (
      <FloatingMessage
        title="New version of the app available!"
        actionText="Update Now"
        message="New version will automatically load next visit after all open
            windows are closed."
        deleteClick={() => setShowAppUpdate(false)}
        actionClick={updateServiceWorker}
      />
    );
  }

  if (showInstallPrompt && installPrompt) {
    const promptInstall = () => {
      installPrompt.prompt();
      // Wait for the user to respond to the prompt
      installPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the A2HS prompt");
        } else {
          console.log("User dismissed the A2HS prompt");
        }
        setShowInstallPrompt(false);
      });
    };

    return (
      <FloatingMessage
        title="App available for installation!"
        actionText="Install App"
        deleteClick={() => setShowInstallPrompt(false)}
        actionClick={promptInstall}
      />
    );
  }

  return null;
}
