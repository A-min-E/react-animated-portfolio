import { useState, useEffect } from "react";
import "./header.css";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );
  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);
  return (
    <header className="flex">
      <button
        onClick={() => {
          setShowModal(true);
        }}
        className="menu icon-menu flex"
      />

      <div />
      <nav>
        <ul className="flex">
          <li>
            <a href="#hero">About</a>
          </li>
          {/* <li>
            <a href="">Articles</a>
          </li> */}
          <li>
            <a href="#main">Projects</a>
          </li>
          {/* <li>
            <a href="">Speaking</a>
          </li> */}
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <button
        onClick={() => {
          //send value to local storage$
          localStorage.setItem(
            "currentMode",
            theme === "dark" ? "light" : "dark"
          );
          //set the theme from the local storage
          setTheme(localStorage.getItem("currentMode"));
        }}
        className="mode flex"
      >
        {theme === "dark" ? (
          <span className="icon-moon-o" />
        ) : (
          <span className="icon-sun" />
        )}
      </button>

      {showModal && (
        <div className="fixed">
          <ul className="modal">
            <li>
              <button
                className="icon-close"
                onClick={() => {
                  setShowModal(false);
                }}
              />
            </li>
            <li>
              <a
                href="#hero"
                onClick={() => {
                  setShowModal(false);
                }}
              >
                About
              </a>
            </li>
            {/* <li>
              <a href="">Articles</a>
            </li> */}
            <li>
              <a
                href="#main"
                onClick={() => {
                  setShowModal(false);
                }}
              >
                Projects
              </a>
            </li>
            {/* <li>
              <a href="">Speaking</a>
            </li> */}
            <li>
              <a
                href="#contact"
                onClick={() => {
                  setShowModal(false);
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
