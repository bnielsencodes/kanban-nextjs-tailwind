import { useEffect, useState } from "react";
import NewColumnsList from "./NewColumnsList";

export default function AddBoardForm(props) {
  const [newBoardName, setNewBoardName] = useState("");

  function handleRemove(id) {
    const newList = columnsList.filter((item) => item.id !== id);
    setColumnsList(newList);
  }


  const newColumnsElements = columnsList.map((item) => {
    return (
      <NewColumnInput
        key={item.id}
        item={item}
        darkMode={props.darkMode}
      />
    );
  });

  return (
    <form id="form" className="flex flex-col">
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
          onChange={(event) => {
            setNewBoardName(() => event.target.value);
          }}
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
      <button
        className={`h-[40px] rounded-[20px] mb-6 ${
          props.darkMode ? "bg-neutral-800" : "bg-palePurpleBtn"
        } text-primary text-[13px] font-semibold leading-[13px] cursor-pointer`}
      >
        + Add New Column
      </button>
      <button
        className="h-[40px] rounded-[20px] bg-primary text-neutral-800 text-[13px] font-semibold leading-[13px] cursor-pointer"
        type="submit"
      >
        Create New Board
      </button>
    </form>
  );
}
