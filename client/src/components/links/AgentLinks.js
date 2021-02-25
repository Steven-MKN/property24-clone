import { NavLink } from "react-router-dom";

const AgentLinks = (props) => {
  return [
    <li>
      <NavLink to="/property/create" className="black-text">
        Create
      </NavLink>
    </li>,
  ];
};

export default AgentLinks;
