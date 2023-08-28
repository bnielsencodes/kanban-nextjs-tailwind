import { useState } from "react";
import Image from "next/image";
import iconChevronUp from "/public/assets/icon-chevron-up.svg";
import iconChevronDown from "/public/assets/icon-chevron-down.svg";
import BoardsModal from "./BoardsModal";

export default function BoardSelect(props) {
  const [showBoardsModal, setShowBoardsModal] = useState(false);

  const handleChange = (event) => {
    if (event.target.checked) {
      setShowBoardsModal(true);
    } else {
      setShowBoardsModal(false);
    }
  };

  return (
    <div className="relative flex items-center cursor-pointer group">
      <input
        id="board-select-btn"
        className="appearance-none hidden focus-visible:outline-none"
        onChange={handleChange}
        type="checkbox"
        name="board-select"
      />
      <label
        className={`flex items-center gap-4 pr-[19px] mt-1 ${
          props.darkMode ? "text-neutral-800" : "text-neutral-100"
        } text-lg font-bold leading-[23px] select-none group-hover:cursor-pointer`}
        htmlFor="board-select-btn"
      >
      </label>
      {!showBoardsModal ? (
        <Image
          className="absolute top-[7px] right-0 mt-[3px] pointer-events-none"
          src={iconChevronDown}
          alt="chevron down icon"
          width="0"
          height="0"
          sizes="100vw"
        />
      ) : (
        <Image
          className="absolute top-[7px] right-0 mt-[3px] pointer-events-none"
          src={iconChevronUp}
          alt="chevron up icon"
          width="0"
          height="0"
          sizes="100vw"
        />
      )}
      <BoardsModal
        darkMode={props.darkMode}
        toggleTheme={props.toggleTheme}
        showBoardsModal={showBoardsModal}
        setShowBoardsModal={setShowBoardsModal}
      />
    </div>
  );
}
