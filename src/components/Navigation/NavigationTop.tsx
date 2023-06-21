import { HamburgerMenu } from "./HamburgerMenu";
import "./NavigationTop.css";
import { Link } from "react-router-dom";
import { Info } from "../Info/Info";
import { useState } from "react";

const NavigationTop = () => {
  const [isShown, setIsShown] = useState(false);
  const scrollToContact = () => {
    setTimeout(() => {
      window.scrollTo({ top: 14000, behavior: "smooth" });
    }, 500);
  };
  return (
    <div className="nav">
      <Link to="/Pitch-Finderr" className="nav-logo">
        <b className="nav-logo-top">
          <span className="nav-logo-top-text">Field</span>
          <span className="nav-logo-top-text2">Finder</span>
        </b>
        <div className="nav-logo-bottom">
          <div className="nav-logo-bottom-text">Let's play</div>
        </div>
      </Link>
      <div className="nav-links">
        <Link
          to="/Pitch-Finderr"
          className="nav-links-home"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          HOME
        </Link>
        <Link
          to="/Pitch-Finderr"
          className="nav-links-contact"
          onClick={scrollToContact}
        >
          CONTACT
        </Link>
        <HamburgerMenu />
        <div
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
          className="nav-links-question-mark"
        >
          <span>?</span>
        </div>
        <Info isShown={isShown} />
      </div>
    </div>
  );
};

export default NavigationTop;
