import { useState } from "react";

export default function NewColumnInput(props) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    props.setColumnsInput({ ...props.columnsInput, [name]: value });
    setInputValue(event.target.value);
  };

  return (
    <>
      <li className="flex items-center justify-between mb-3">
        <input
          className={`w-[calc(100%-31px)] h-[40px] pl-[16px] border border-inputBorder rounded bg-transparent ${
            props.darkMode ? "text-neutral-800" : "text-neutral-100"
          } placeholder-colorDefault`}
          onChange={handleChange}
          type="text"
          name={`column${props.item.id}`}
          value={inputValue}
          placeholder="e.g. Todo"
          aria-label="new column title"
        />
        <button
          className="w-[15px] h-[15px] bg-cross bg-center bg-cover bg-no-repeat"
          onClick={(e) => {
            e.preventDefault();
            props.handleRemove(props.item.id);
          }}
        ></button>
      </li>
    </>
  );
}
