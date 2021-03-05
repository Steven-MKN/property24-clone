import AgentLinks from "../links/AgentLinks";
import NoUserLinks from "../links/NoUserLinks";
import SignedInLinks from "../links/SignedInLinks";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = (props) => {
  let [display, setDisplay] = useState("none");

  const onNavToggle = () => {
    setDisplay(display === "none" ? "grid" : "none");
  };

  return (
    <nav className="nav-wrapper white navbar">
      <NavLink to="/" className="brand-logo logo">
        <img src="property24_logo.svg" alt="property24 logo" />
      </NavLink>

      <a
        href="#/"
        className="waves-effect waves-teal btn-flat sidenav-trigger nav-toggler"
        onClick={onNavToggle}
      >
        <i className="material-icons left">menu</i>
      </a>

      <div className="container">
        <ul className="hide-on-med-and-down right">
          {props.auth && props.auth.isAgent ? <AgentLinks /> : ""}

          {props.auth && props.auth.token ? (
            <SignedInLinks setAuth={props.setAuth} />
          ) : (
            <NoUserLinks />
          )}
        </ul>
      </div>

      <ul className="blue darken-3 nav-list" style={{ display: display }}>
        <a
          href="#/"
          className="waves-effect waves-teal btn-flat nav-close"
          onClick={onNavToggle}
        >
          <i className="material-icons left">close</i>
        </a>
        {props.auth && props.auth.isAgent ? <AgentLinks /> : ""}

        {props.auth && props.auth.token ? <SignedInLinks /> : <NoUserLinks />}
      </ul>
    </nav>
  );
};

export default Navbar;
