import Image from "next/image";
import logoMobile from "/public/assets/logo-mobile.svg";

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
    </div>
  );
}
