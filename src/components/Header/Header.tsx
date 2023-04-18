import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <nav>
        <div className="navbar-user-name">
          <a href="#">Muhammad Faraz Ali</a>
        </div>
        <div className="navbar-links">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Blogs</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Header;
