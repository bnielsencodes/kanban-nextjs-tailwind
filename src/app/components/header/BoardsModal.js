import AllBoards from "../shared/AllBoards";
import LightDarkToggle from "@/app/components/shared/LightDarkToggle";

export default function BoardsModal(props) {
  return (
    <div
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
      <div
      >
        <AllBoards
          setShowBoardsModal={props.setShowBoardsModal}
          currentTaskboard={props.currentTaskboard}
          setCurrentTaskboard={props.setCurrentTaskboard}
        />
        <LightDarkToggle
          darkMode={props.darkMode}
          toggleTheme={props.toggleTheme}
        />
      </div>
    </div>
  );
}
