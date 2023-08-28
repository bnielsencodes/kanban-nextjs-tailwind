"use client";
import { useEffect, useState } from "react";
import Header from "./components/header/Header";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);




  return (
    <div
    >
      <Header
        darkMode={darkMode}
      />
      <main
      </main>
    </div>
  );
}
