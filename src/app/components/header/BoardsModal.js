import AllBoards from "../shared/AllBoards";
import LightDarkToggle from "@/app/components/shared/LightDarkToggle";

export default function BoardsModal(props) {
  return (
    <div
      className={`absolute top-[43px] left-[-56px] z-30 w-screen h-screen select-none cursor-default ${
        props.showBoardsModal ? "opacity-100" : "opacity-0"
      } ${props.showBoardsModal ? "visible" : "invisible"}`}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
      <div
        className={`boards-modal relative z-40 flex flex-col w-[264px] py-4 pt-[17px] rounded-lg mt-4 mx-auto mb-0 ${
          props.darkMode ? "bg-neutral-300" : "bg-neutral-800"
        } ${
          props.darkMode ? "shadow-boardsModalDark" : "shadow-boardsModalLight"
        } select-none ${
          props.showBoardsModal
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-2/4"
        }`}
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
