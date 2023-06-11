import { useCallback } from "react";
import "./Menu.css";
import { Link } from "react-router-dom";

interface MenuProps {
  toggleMenu: () => void;
}

export const Menu: React.FC<MenuProps> = ({ toggleMenu }) => {
  const handleCloseHome = () => {
    toggleMenu();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleCloseContact = () => {
    toggleMenu();
    setTimeout(() => {
      window.scrollTo({ top: 14000, behavior: "smooth" });
    }, 500);
  };
  const lockScroll = useCallback(() => {
    document.body.style.overflow = "hidden";
  }, []);

  lockScroll();

  return (
    <div className="menu">
      <div className="menu-list">
        <Link to="/" className="menu-list-home" onClick={handleCloseHome}>
          Home
        </Link>
        <Link to="/" className="menu-list-contact" onClick={handleCloseContact}>
          Contact
        </Link>
      </div>
    </div>
  );
};
