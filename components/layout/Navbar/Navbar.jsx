import { useRef, useState } from "react";
import { useOnClickOutside } from "../../../hooks/useClickOutside";
import Link from "next/link";
import { Logo } from "../../Logo";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { menuItems } from "./menuItems";

const Navbar = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const refNavbar = useRef(null);

  useOnClickOutside(refNavbar, () => setModalOpen(false));

  function openCloseHamburger() {
    setModalOpen((prev) => !prev);
  }
  return (
    <nav ref={refNavbar} className="nav">
      <div className="nav--menu-desktop">
        <Link href="/" passHref>
          <a onClick={() => isModalOpen && setModalOpen(false)}>
            <div className="nav--logo-wrapper">
              <Logo />
            </div>
          </a>
        </Link>
        <div className="nav--menu-wrapper">
          <button type="button" aria-label="menu" onClick={openCloseHamburger}>
            {isModalOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>

        <ul className="nav--items-desktop">
          {menuItems.map((item) => (
            <li key={item.title}>
              <Link href={item.link}>
                <a>{item.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {isModalOpen && (
        <ul className="nav--items-mobile">
          {menuItems.map((item) => (
            <li key={item.title} className="flex justify-center">
              <Link href={item.link}>
                <a onClick={openCloseHamburger}>{item.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
