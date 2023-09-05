import { useEffect, useState } from "react";
import data from "../../data";
import NewColumnInput from "./NewColumnInput";

export default function AddBoardForm(props) {
  const [columnsList, setColumnsList] = useState([]);
  const [columnsInput, setColumnsInput] = useState([]);
  const [newBoard, setNewBoard] = useState({
    id: props.boardCount + 1,
    name: "",
    columns: [],
  });

  useEffect(() => {
    setNewBoard({
      ...newBoard,
      columns: [columnsInput],
    });
  }, [columnsInput]);

  // Set name property of newBoard state
  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewBoard({ ...newBoard, [name]: value });
  };

  function handleRemove(id) {
    const newList = columnsList.filter((item) => item.id !== id);
    setColumnsList(newList);
  }

  function handleSubmit() {
    data.push(newBoard);
    props.setBoardCount(props.boardCount + 1);
    props.setShowAddBoardModal(false);
  }

  const newColumnsElements = columnsList.map((item) => {
    return (
      <NewColumnInput
        key={item.id}
        item={item}
        darkMode={props.darkMode}
        columnsInput={columnsInput}
        setColumnsInput={setColumnsInput}
        handleRemove={handleRemove}
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
          onChange={handleChange}
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
          {columnsList.length < 1 ? (
            <p
              className={`pl-4 mb-4 ${
                props.darkMode
                  ? "text-placeholderDark"
                  : "text-placeholderLight"
              } text-xs italic`}
            >
              No columns
            </p>
          ) : (
            newColumnsElements
          )}
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
        onClick={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        type="submit"
      >
        Create New Board
      </button>
    </form>
  );
}
