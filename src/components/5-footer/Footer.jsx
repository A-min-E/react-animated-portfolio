import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="flex">
      <ul className="flex">
        <li>
          <a href="#hero">About</a>
        </li>
        <li>
          <a href="#main">Projects</a>
        </li>
        {/* <li>
          <a href="">Speaking</a>
        </li> */}
        <li>
          <a href="#contac">Contact</a>
        </li>
      </ul>
      <p>{new Date().getFullYear()} Mohamed Amine WISSAR. All right reserved</p>
    </footer>
  );
};

export default Footer;
