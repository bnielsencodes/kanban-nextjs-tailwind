import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";

export default function Header(props) {
  return (
    <div
      className={`flex items-center justify-between p-4 ${
        props.darkMode ? "bg-neutral-300" : "bg-neutral-800"
      }`}
    >
      <HeaderLeft
        darkMode={props.darkMode}
        toggleTheme={props.toggleTheme}
      />
      <HeaderRight />
    </div>
  );
}
