import { NavLink } from "react-router-dom";

const NoUserLinks = (props) => {
  return [
    <li>
      <NavLink to="/login" className="black-text">
        Login
      </NavLink>
    </li>,
    <li>
      <NavLink to="/signup" className="black-text">
        Sign up
      </NavLink>
    </li>,
  ];
};

export default NoUserLinks;
