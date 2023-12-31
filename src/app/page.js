"use client";
import { useEffect, useState } from "react";
import data from "./data";
import Header from "./components/header/Header";
import EmptyBoard from "./components/taskboard/EmptyBoard";
import AddBoardModal from "./components/shared/AddBoardModal";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [showAddBoardModal, setShowAddBoardModal] = useState(false);
  const [boardCount, setBoardCount] = useState(3);
  const [currentBoard, setCurrentBoard] = useState(data[0]);
  const [currentBoardTitle, setCurrentBoardTitle] = useState(data[0].name);

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
    <div>
      <Header
        darkMode={darkMode}
        toggleTheme={toggleTheme}
        boardCount={boardCount}
        setBoardCount={setBoardCount}
        currentBoard={currentBoard}
        setCurrentBoard={setCurrentBoard}
        currentBoardTitle={currentBoardTitle}
        setShowAddBoardModal={setShowAddBoardModal}
        setCurrentBoardTitle={setCurrentBoardTitle}
      />
      <main
        className={`main h-screen ${
          darkMode ? "bg-neutral-200" : "bg-neutral-700"
        }`}
      >
        {data.length > 0 ? (
          <p className="italic text-neutral-800">current taskboard</p>
        ) : (
          <EmptyBoard setShowAddBoardModal={setShowAddBoardModal} />
        )}
        {showAddBoardModal && (
          <AddBoardModal
            darkMode={darkMode}
            boardCount={boardCount}
            setBoardCount={setBoardCount}
            setShowAddBoardModal={setShowAddBoardModal}
          />
        )}
      </main>
    </div>
  );
}
