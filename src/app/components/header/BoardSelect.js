import Image from "next/image";
import iconChevronDown from "/public/assets/icon-chevron-down.svg";
import BoardsModal from "./BoardsModal";

export default function BoardSelect(props) {
  return (
    <div className="relative flex items-center cursor-pointer group">
      <input
      />
      <label
      >
        <Image
          className="absolute top-[7px] right-0 mt-[3px] pointer-events-none"
          src={iconChevronDown}
          alt="chevron down icon"
          width="0"
          height="0"
          sizes="100vw"
        />
      <BoardsModal
      />
    </div>
  );
}
