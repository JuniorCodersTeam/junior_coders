import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";

export const Button = ({ link }) => {
  return (
    <Link href={`blog/${link}`}>
      <a className="btn">
        <span>{"Czytaj więcej"}</span>
        <BsArrowRightShort className="arrow-icon" />
      </a>
    </Link>
  );
};
