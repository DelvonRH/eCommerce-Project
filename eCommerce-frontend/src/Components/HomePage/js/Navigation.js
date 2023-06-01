import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./../css/Navigation.css";

const Navigation = () => {
  const [isCollapsed, setCollapsed] = useState(true);

  const toggleCollapse = () => {
    setCollapsed(!isCollapsed);
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Brand
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse${isCollapsed ? "" : " show"}`}
        >
          <ul className="navbar-nav mx-auto text-center">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Checkout
              </a>
            </li>
          </ul>
          <div className="ml-auto text-center">
            <Link className="btn btn-outline-light" to="/login">
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
