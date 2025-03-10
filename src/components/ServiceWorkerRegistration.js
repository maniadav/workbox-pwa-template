"use client";
import { useEffect } from "react";
import { Workbox } from "workbox-window";

export default function ServiceWorkerRegistration() {
  useEffect(() => {
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      const wb = new Workbox("/sw.js", {
        // Remove type: 'module' and add scope
        scope: "/",
        registrationOptions: {
          // Explicitly set to classic script
          type: "classic",
        },
      });

      wb.register()
        .then((registration) => {
          console.log("SW registered:", registration);
        })
        .catch((error) => {
          console.error("SW registration failed:", error);
        });
    }
  }, []);

  return null;
}
