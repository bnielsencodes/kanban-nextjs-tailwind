import { useState } from "react";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";
import EditDeleteBoardModal from "./EditDeleteBoardModal";
import DeleteBoardModal from "./DeleteBoardModal";

export default function Header(props) {
  const [showEditDeleteBoardModal, setShowEditDeleteBoardModal] =
    useState(false);

  return (
    <div
      className={`flex items-center justify-between p-4 ${
        props.darkMode ? "bg-neutral-300" : "bg-neutral-800"
      }`}
    >
      <HeaderLeft
        darkMode={props.darkMode}
        toggleTheme={props.toggleTheme}
        setShowAddBoardModal={props.setShowAddBoardModal}
        setCurrentBoard={props.setCurrentBoard}
        currentBoardTitle={props.currentBoardTitle}
        setCurrentBoardTitle={props.setCurrentBoardTitle}
      />
      <HeaderRight setShowEditDeleteBoardModal={setShowEditDeleteBoardModal} />
      {showEditDeleteBoardModal && (
        <EditDeleteBoardModal
          darkMode={props.darkMode}
          showEditDeleteBoardModal={showEditDeleteBoardModal}
          setShowEditDeleteBoardModal={setShowEditDeleteBoardModal}
          setShowDeleteBoardModal={props.setShowDeleteBoardModal}
        />
      )}
      {props.showDeleteBoardModal && (
        <DeleteBoardModal
          darkMode={props.darkMode}
          currentBoard={props.currentBoard}
          currentBoardTitle={props.currentBoardTitle}
          setShowAddBoardModal={props.setShowAddBoardModal}
          setShowDeleteBoardModal={props.setShowDeleteBoardModal}
          handleRemoveBoard={props.handleRemoveBoard}
        />
      )}
    </div>
  );
}
