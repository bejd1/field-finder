import { useCallback, useState } from "react";
import "./NavigationTop.css";
import { Menu } from "../Menu/Menu";

export const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
    unlockScroll();
  };
  const unlockScroll = useCallback(() => {
    document.body.style.overflow = "";
  }, []);

  return (
    <div>
      {open && <Menu toggleMenu={toggleMenu} />}

      <div className="home-burgerMenu" onClick={() => toggleMenu()}>
        <div className="home-burgerMenu-top"></div>
        <div className="home-burgerMenu-mid"></div>
        <div className="home-burgerMenu-bot"></div>
      </div>
    </div>
  );
};
