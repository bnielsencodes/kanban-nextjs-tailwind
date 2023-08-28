"use client";
import { useEffect, useState } from "react";
import Header from "./components/header/Header";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentTaskboard, setCurrentTaskboard] = useState(data[0].name);

  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (prefersDark) {
      setDarkMode(true);
    }
  }, []);

  // toggle dark mode
  function toggleTheme() {
    setDarkMode((prevMode) => !prevMode);
  }


  return (
    <div
    >
      <Header
        darkMode={darkMode}
        toggleTheme={toggleTheme}
        currentTaskboard={currentTaskboard}
        setCurrentTaskboard={setCurrentTaskboard}
      />
      <main
      </main>
    </div>
  );
}
