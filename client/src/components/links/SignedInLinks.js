import axios from "axios";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import { api } from "../../config";

const SignedInLinks = (props) => {
  const [redirect, setRedirect] = useState(null);

  const handleSignOut = async () => {
    const url = api + "/logout";

    const response = await axios.get(url);
    if (response.status === 200) {
      localStorage.removeItem("token");
      props.setAuth(null);
      setRedirect("/");
    }
  };

  return [
    redirect ? <Redirect to={redirect} /> : null,
    <li key="logout">
      <a href="#/" onClick={handleSignOut} className="black-text">
        Logout
      </a>
    </li>,
  ];
};

export default SignedInLinks;
