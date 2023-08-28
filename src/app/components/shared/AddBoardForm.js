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

      <fieldset>
        <label
          htmlFor="board-name"
        >
          Board Name
        </label>
        <input
          id="board-name"
          type="text"
          name="name"
          placeholder="e.g. Web Design"
        />
      </fieldset>

      <fieldset>
        <p
        >
          Board Columns
        </p>
        <ul>
        </ul>
      </fieldset>
    </form>
  );
}
