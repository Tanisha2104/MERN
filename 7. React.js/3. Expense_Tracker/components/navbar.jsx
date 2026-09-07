import React, { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

function Navbar() {
  const [dark, toggleTheme] = useContext(ThemeContext);
  return (
    <>
      <nav>
        <h2>Expense Tracker</h2>
        <button onClick={toggleTheme}>
          {dark ? "Light Mode" : "Dark Mode"}
        </button>
      </nav>
    </>
  );
}

export default Navbar;
