import data from "../../data";
import BoardsList from "./BoardsList";

export default function AllBoards(props) {
  const boardsListElements = data.map((board) => {
    return (
      <BoardsList
        key={board.id}
        board={board}
        setCurrentBoard={props.setCurrentBoard}
        currentBoardTitle={props.currentBoardTitle}
        setCurrentBoardTitle={props.setCurrentBoardTitle}
      />
    );
  });

  return (
    <div>
      <p className="pl-6 text-neutral-500 text-xs font-semibold leading-[15px] tracking-[2.4px] uppercase">
        All Boards ({data.length})
      </p>
      <ul className="mt-[18px] mb-[14px]">{boardsListElements}</ul>
      <div className="flex items-center pl-6 mb-[34px]">
        <svg
          className="mr-3"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="fill-primary"
            d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z"
          />
        </svg>
        <button
          className="h-[16px] text-primary font-semibold leading-[19px] cursor-pointer"
          onClick={() => {
            props.setShowBoardsModal((prevState) => !prevState);
            props.setShowAddBoardModal(true);
          }}
        >
          + Create New Board
        </button>
      </div>
    </div>
  );
}
