import React from "react";
import PropTypes from "prop-types";
import Logo from "../images/logo.png";

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid p-0">
        <a className="navbar-brand fw-bold" href="/">
          <img src={Logo} alt="logo" className="logo" />
          {props.title}
        </a>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};
