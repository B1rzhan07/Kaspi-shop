import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
const Navbar = () => {
  return (
    <div className="headerWrapper">
      <div className="logo">
        <Link to="/">
          <img src="https://kaspi.kz/img/Logo.svg" alt="" />
        </Link>
      </div>
      <nav className="nav">
        <li className="clear">Клиентам</li>
        <li>Бизнесу</li>
        <li>Kaspi Гид</li>
      </nav>
      <div className="empty"></div>
    </div>
  );
};

export default Navbar;
