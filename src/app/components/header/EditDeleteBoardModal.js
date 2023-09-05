export default function EditDeleteBoardModal(props) {
  return (
    <div
      className={`absolute top-0 right-0 z-30 w-screen h-screen select-none cursor-default ${
        props.showEditDeleteBoardModal ? "opacity-100" : "opacity-0"
      } ${props.showEditDeleteBoardModal ? "visible" : "invisible"}`}
    >
      <div
        className={`edit-delete-board-modal relative z-40 flex flex-col gap-4 w-[192px] pt-[17px] pb-[17px] pl-[17px] rounded-lg mt-[57px] mr-[23px] mb-0 ml-auto ${
          props.darkMode ? "bg-neutral-200" : "bg-neutral-800"
        } select-none ${
          props.showEditDeleteBoardModal
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-2/4"
        }`}
      >
        <button className="text-neutral-500 text-[13px] leading-[23px] text-left">
          Edit Board
        </button>
        <button
          className="text-warning text-[13px] leading-[23px] text-left"
        >
          Delete Board
        </button>
      </div>
    </div>
  );
}
