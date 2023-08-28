import Image from "next/image";
import iconLight from "/public/assets/icon-light-theme.svg";
import iconDark from "/public/assets/icon-dark-theme.svg";

export default function LightDarkToggle(props) {
  return (
    <div
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
          type="checkbox"
          name="toggle"
        />
        <label
          htmlFor="toggle"
        >
          <span
          />
          <span />
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
