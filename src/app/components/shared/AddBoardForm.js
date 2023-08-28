export default function AddBoardForm(props) {
  return (
    <form className="flex flex-col">
      <p
        className={`mb-[18px] ${
          props.darkMode ? "text-neutral-800" : "text-neutral-100"
        } text-lg font-bold leading-[23px]`}
      >
        Add New Board
      </p>
    </form>
  );
}
