import Image from "next/image";
import logoMobile from "/public/assets/logo-mobile.svg";
import BoardSelect from "./BoardSelect";

export default function HeaderLeft(props) {
  return (
    <div className="flex items-center">
      <Image
        className="w-6 h-[25px] mr-4 "
        src={logoMobile}
        alt="Kanban logo"
        width="0"
        height="0"
        sizes="100vw"
      />
      <BoardSelect
        darkMode={props.darkMode}
        toggleTheme={props.toggleTheme}
        currentTaskboard={props.currentTaskboard}
        setCurrentTaskboard={props.setCurrentTaskboard}
      />
    </div>
  );
}
