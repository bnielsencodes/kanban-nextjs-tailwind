import Image from "next/image";
import iconLight from "/public/assets/icon-light-theme.svg";
import iconDark from "/public/assets/icon-dark-theme.svg";

export default function LightDarkToggle(props) {
  return (
    <div
      className={`flex items-center justify-center w-[235px] h-12 rounded-md mt-auto mx-auto ${
        props.darkMode ? "bg-neutral-200" : "bg-neutral-700"
      }`}
    >
      <Image
        src={iconLight}
        alt="sun icon"
        width="0"
        height="0"
        sizes="100vw"
      />
      <div className="relative inline-block w-10 mx-6 ">
        <input
          id="toggle"
          className="toggle hidden"
          onClick={props.toggleTheme}
          type="checkbox"
          name="toggle"
        />
        <label
          className="block rounded-[20px] overflow-hidden cursor-pointer"
          htmlFor="toggle"
        >
          <span
            className={`inner block w-[200px] ${props.darkMode ? "dark" : ""}`}
          />
          <span className={`switch ${props.darkMode ? "dark" : ""}`} />
        </label>
      </div>
      <Image
        src={iconDark}
        alt="moon and star icon"
        width="0"
        height="0"
        sizes="100vw"
      />
    </div>
  );
}
