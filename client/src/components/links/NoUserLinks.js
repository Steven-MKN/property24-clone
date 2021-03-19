import { NavLink } from "react-router-dom";

const NoUserLinks = (props) => {
  return [
    <li key="login">
      <NavLink to="/login" className="black-text" onClick={props.onNavToggle}>
        Login
      </NavLink>
    </li>,
    <li key="signup">
      <NavLink to="/signup" className="black-text" onClick={props.onNavToggle}>
        Sign up
      </NavLink>
    </li>,
  ];
};

export default NoUserLinks;
