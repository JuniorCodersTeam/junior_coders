import { useRef, useState } from "react";
import { useOnClickOutside } from "../../../hooks/useClickOutside";
import Link from "next/link";
import { Logo } from "./Logo";
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
    <nav
      ref={refNavbar}
      className={`z-50 sticky top-0 shadow-bottom dark:shadow-bottom-dark`}
    >
      <div className="flex items-center justify-between py-1 container mx-auto">
        <Link href="/" passHref>
          <a
            className="flex items-center"
            onClick={() => isModalOpen && setModalOpen(false)}
          >
            <div className="w-8 h-16 relative">
              <Logo />
            </div>
            <span className="ml-3 font-bold lg:text-xl">Junior Coders</span>
          </a>
        </Link>
        <div className="flex items-center lg:hidden">
          <button
            className="cursor-pointer text-xl mx-3 my-1 outline-none focus:outline-none"
            type="button"
            aria-label="menu"
            onClick={openCloseHamburger}
          >
            {isModalOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>

        <ul className="hidden lg:flex items-center">
          {menuItems.map((item) => (
            <li key={item.title}>
              <Link href={item.link}>
                <a
                  onClick={openCloseHamburger}
                  className="mx-2 py-2 uppercase text-sm hover:opacity-75 text-center font-medium tracking-tighter"
                >
                  {item.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {isModalOpen && (
        <div className="lg:hidden items-center overflow-hidden">
          <ul className="flex flex-col">
            {menuItems.map((item) => (
              <li key={item.title} className="flex justify-center">
                <Link href={item.link}>
                  <a
                    onClick={openCloseHamburger}
                    className="mx-2 py-2 uppercase text-sm text-center font-medium tracking-tighter"
                  >
                    {item.title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
