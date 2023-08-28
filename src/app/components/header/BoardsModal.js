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
        />
        <LightDarkToggle
          darkMode={props.darkMode}
        />
      </div>
    </div>
  );
}
