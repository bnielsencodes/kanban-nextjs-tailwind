export default function DeleteBoardModal(props) {
  return (
    <div className="absolute top-0 left-0 z-10 w-screen h-screen select-none">
      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
      <div
        className={`absolute top-[calc(50%+64px)] left-1/2 z-20 w-[343px] p-6 rounded-md -translate-x-1/2 -translate-y-1/2 ${
          props.darkMode ? "bg-neutral-300" : "bg-neutral-800"
        } select-none`}
      >
        <p className="mb-[22px] text-warning text-lg font-bold leading-[23px]">
          Delete this board?
        </p>
        <p className="pr-1 mb-[22px] text-neutral-500 text-[13px] leading-[23px]">
          Are you sure you want to delete the ‘{props.currentBoardTitle}’ board?
          This action will remove all columns and tasks and cannot be reversed.
        </p>
        <div className="flex flex-col gap-4">
          <button
            className={`h-[40px] rounded-[20px] bg-warning text-neutral-800 text-[13px] font-semibold leading-[13px] cursor-pointer`}
            onClick={() => props.handleRemoveBoard(props.currentBoard.id)}
          >
            Delete
          </button>
          <button
            className="h-[40px] rounded-[20px] bg-neutral-800 text-primary text-[13px] font-semibold leading-[13px] cursor-pointer"
            onClick={(e) => {
              props.setShowDeleteBoardModal(false);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
