export default function NewColumnInput(props) {
  return (
    <>
      <li className="flex items-center justify-between mb-3">
        <input
          className={`w-[calc(100%-31px)] h-[40px] pl-[16px] border border-inputBorder rounded bg-transparent ${
            props.darkMode ? "text-neutral-800" : "text-neutral-100"
          } placeholder-colorDefault`}
          type="text"
          name={`column${props.item.id}`}
          value={inputValue}
          placeholder="e.g. Todo"
          aria-label="new column title"
        />
        <button
          className="w-[15px] h-[15px] bg-cross bg-center bg-cover bg-no-repeat"
        ></button>
      </li>
    </>
  );
}
