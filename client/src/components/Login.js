import { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import { api } from "../config";

const Login = (props) => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
    emailErrors: "",
    passwordErrors: "",
    userTypeError: "",
    redirect: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validInputs()) {
      try {
        const url = api + "/login";

        console.log(url);

        const response = await axios.post(url, {
          email: loginForm.email,
          password: loginForm.password,
        });

        console.log(response);

        if (response.status === 200) {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("isAgent", response.data.isAgent);

          props.setAuth({
            token: response.data.token,
            isAgent: response.data.isAgent,
          });

          setLoginForm({
            ...loginForm,
            redirect: "/",
          });
        } else if (response.status === 400) {
          setLoginForm({
            ...loginForm,
            emailErrors: response.data.email,
            passwordErrors: response.data.password,
          });
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const onTextChange = (e) => {
    setLoginForm({
      ...loginForm,
      [e.target.id]: e.target.value,
    });
  };

  const validInputs = () => {
    return true;
  };

  return (
    <>
      {loginForm.redirect ? <Redirect to={loginForm.redirect} /> : null}
      <div className="container row flex">
        <form onSubmit={handleSubmit} className="col m8 s12 put-mid">
          <label>
            <h3>Login</h3>
          </label>

          <div className="input-field">
            <input
              id="email"
              type="email"
              className="validate"
              value={loginForm.email}
              onChange={onTextChange}
            />
            <label htmlFor="email">Email</label>
            <div className="red-text email error">{loginForm.emailErrors}</div>
          </div>

          <div className="input-field">
            <input
              id="password"
              type="password"
              value={loginForm.password}
              onChange={onTextChange}
            />
            <label htmlFor="password">Password</label>
            <div className="red-text password error">
              {loginForm.passwordErrors}
            </div>
          </div>

          <div>
            <Link to="#/">forgot password?</Link>
          </div>
          <div>
            <Link to="/signup">signup</Link>
          </div>

          <input
            type="submit"
            className="waves-effect waves-light btn"
            value="Login"
          />
        </form>
      </div>
    </>
  );
};

export default Login;
