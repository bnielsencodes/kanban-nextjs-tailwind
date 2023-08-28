"use client";
import { useEffect, useState } from "react";
import Header from "./components/header/Header";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);


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
      />
      <main
      </main>
    </div>
  );
}
