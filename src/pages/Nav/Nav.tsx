import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavigationTop from "../../components/Navigation/NavigationTop";
import "./Nav.css";
import { pitchDataBase } from "../../components/PitchDataBase/PitchDataBase";

interface Pitch {
  id?: number;
  city: string;
  name: string;
  address: string;
}

const Nav = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isListOpen, setIsListOpen] = useState(false);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const clickedLetter = event.target.value;
    setSearchQuery(clickedLetter);
    setIsListOpen(true);
  };

  const filteredProducts = pitchDataBase.filter(
    (pitch: Pitch) =>
      pitch.city.toLowerCase().startsWith(searchQuery.toLowerCase()) ||
      pitch.name.toLowerCase().startsWith(searchQuery.toLowerCase()) ||
      pitch.address.toLowerCase().startsWith(searchQuery.toLowerCase())
  );

  const handleLinkClick = () => {
    setIsListOpen(false);
    setSearchQuery("");
  };

  return (
    <div className="navigation">
      <NavigationTop />

      <input
        className="navigation-child"
        type="text"
        placeholder="Find pitch near you by place"
        value={searchQuery}
        onChange={handleSearch}
      />

      {isListOpen && (
        <div className="searching-listitem">
          {searchQuery &&
            filteredProducts.map((pitch: Pitch) => (
              <Link
                to={`/pitch/${pitch.id}`}
                onClick={handleLinkClick}
                className="searching-listitem-link"
                key={pitch.id}
              >
                <div className="searching-list">
                  <p key={pitch.name} className="pitch-name">
                    {pitch.city}, {pitch.address}, {pitch.name}
                  </p>
                </div>
              </Link>
            ))}
        </div>
      )}
    </div>
  );
};

export default Nav;
