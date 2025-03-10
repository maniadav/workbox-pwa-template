"use client";
import React, { useEffect } from "react";

export default function RootLayoutClient({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      console.log("SW initiating");
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/sw.js")
          .then((registration) => {
            console.log("SW registered:", registration);
          })
          .catch((error) => {
            console.log("SW registration failed:", error);
          });
      });
    } else {
      console.log("no window");
    }
  }, []);

  return (
    <div className="text-white flex flex-col">
      <div className="container mx-auto px-4 max-w-[1024px]">{children}</div>
    </div>
  );
}
