import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";

export const Button = ({ current, link }) => {
  return (
    <Link href={`${current}/${link}`}>
      <a className="btn">
        <span>{"Czytaj więcej"}</span>
        <BsArrowRightShort className="arrow-icon" />
      </a>
    </Link>
  );
};
