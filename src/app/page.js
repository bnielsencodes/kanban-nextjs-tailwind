"use client";
import { useEffect, useState } from "react";
import Header from "./components/header/Header";
import AddBoardModal from "./components/shared/AddBoardModal";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [showAddBoardModal, setShowAddBoardModal] = useState(false);
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
        setShowAddBoardModal={setShowAddBoardModal}
        currentTaskboard={currentTaskboard}
        setCurrentTaskboard={setCurrentTaskboard}
      />
      <main
        className={`main h-screen ${
          darkMode ? "bg-neutral-200" : "bg-neutral-700"
        }`}
      >
      </main>
    </div>
  );
}
