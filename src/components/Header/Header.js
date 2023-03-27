import React from "react";
import { useNavigate } from "react-router-dom";

const Header = ({
  searchTerm,
  setSearchTerm,
  navigateTarget,
  searchCategory,
}) => {
  let placeholder = `🔍 ${searchCategory}`;
  let navigate = useNavigate();
  return (
    <header>
      <h1>P3 Movie Page</h1>
      <div>
        <button
          className="linkTo"
          onClick={() => {
            setSearchTerm("");
            navigate(navigateTarget);
          }}
        >
          {navigateTarget === "../" ? "Home" : "Favorites"}
        </button>
        <input
          placeholder={placeholder}
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
          value={searchTerm}
        />
      </div>
    </header>
  );
};

export default Header;
