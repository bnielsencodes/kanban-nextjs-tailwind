import AddBoardForm from "./AddBoardForm";

export default function AddBoardModal(props) {
  return (
    <div className="absolute top-0 left-0 z-10 w-screen h-screen select-none">
      <div
        className="absolute top-0 left-0 w-full h-full bg-black/40"
        onClick={() => props.setShowAddBoardModal(false)}
      ></div>
      <div
        className={`absolute top-[calc(50%+64px)] left-1/2 z-20 w-[343px] p-6 rounded-md -translate-x-1/2 -translate-y-1/2 ${
          props.darkMode ? "bg-neutral-300" : "bg-neutral-800"
        } select-none`}
      >
        <AddBoardForm
          darkMode={props.darkMode}
          boardCount={props.boardCount}
          setBoardCount={props.setBoardCount}
          setShowAddBoardModal={props.setShowAddBoardModal}
        />
      </div>
    </div>
  );
}
