import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";

export default function Header(props) {
  return (
    <div
    >
      <HeaderLeft
        darkMode={props.darkMode}
      />
      <HeaderRight />
    </div>
  );
}
