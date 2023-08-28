import NewColumnsList from "./NewColumnsList";

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
          className={`${
            props.darkMode ? "text-neutral-800" : "text-neutral-500"
          } text-xs font-bold leading-[15px]`}
          htmlFor="board-name"
        >
          Board Name
        </label>
        <input
          id="board-name"
          className={`w-full h-[40px] pl-[16px] border border-inputBorder rounded mt-[3.5px] mb-[2px] bg-transparent ${
            props.darkMode ? "text-neutral-800" : "text-neutral-100"
          } ${
            props.darkMode
              ? "placeholder-placeholderDark"
              : "placeholder-placeholderLight"
          }`}
          type="text"
          name="name"
          placeholder="e.g. Web Design"
        />
      </fieldset>

      <fieldset>
        <p
          className={`mt-[22px] mb-[7px] ${
            props.darkMode ? "text-neutral-800" : "text-neutral-500"
          } text-xs font-bold leading-[15px]`}
        >
          Board Columns
        </p>
        <ul>
        </ul>
      </fieldset>
    </form>
  );
}
