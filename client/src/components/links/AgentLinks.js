import { NavLink } from "react-router-dom";

const AgentLinks = (props) => {
  return [
    <li key="create">
      <NavLink
        to="/property/create"
        className="black-text"
        onClick={props.onNavToggle}
      >
        Create
      </NavLink>
    </li>,
  ];
};

export default AgentLinks;
