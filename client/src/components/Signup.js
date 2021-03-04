import { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from 'axios'
import { api } from "../config";

const Signup = (props) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    emailErrors: "",
    passwordErrors: "",
    userType: "default",
    userTypeError: "",
    redirect: null
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setForm({
      ...form,
      emailErrors: '',
      passwordErrors: '',
      userTypeError: ''
    })

    if (validInputs()) {
      try{
        const url = api + '/signup'

        console.log(url)
  
        const response = await axios.post(url , {
          email: form.email,
          password: form.password,
          userType: form.userType
        })
  
        console.log(response)
  
        if (response.status === 201){
          localStorage.setItem('token', response.data.token)
          localStorage.setItem('isAgent', response.data.isAgent)
          
          props.setAuth({
            token: response.data.token,
            isAgent: response.data.isAgent
          })
          
          setForm({
            ...form,
            redirect: '/'
          })

        } else if (response.status === 400) {
          setForm({
            ...form,
            emailErrors: response.data.email,
            passwordErrors: response.data.password
          })
        }
      } catch (error){
        console.log(error)
      }
    }
  };

  const onTextChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  const handleUserTypeChange = (e) => {

    setForm({
      ...form,
      userType: e.target.value
    })
  }

  const validInputs = () => {
    let isValid = true;

    if (form.email.length < 3) {
      isValid = false
      setForm({
        ...form,
        emailErrors: 'Invalid Email'
      })
    }

    if (form.password.length < 6) {
      isValid = false
      setForm({
        ...form,
        passwordErrors: 'Password too short'
      })
    }

    if (form.userType === 'default'){
      isValid = false
      setForm({
        ...form,
        userTypeError: 'Please select a type of user'
      })
    }

    return isValid;
  };

  return (<>
      { form.redirect ? <Redirect to={ form.redirect } /> : null}
      <div className="container row flex">
        <form onSubmit={handleSubmit} className="col m8 s12 put-mid">
          <label>
            <h3>Signup</h3>
          </label>

          <div className="input-field">
            <input
              id="email"
              type="email"
              className="validate"
              value={form.email}
              onChange={onTextChange}
            />
            <label htmlFor="email">Email</label>
            <div className="red-text email error">{form.emailErrors}</div>
          </div>

          <div className="input-field">
            <input
              id="password"
              type="password"
              value={form.password}
              onChange={onTextChange}
            />
            <label htmlFor="password">Password</label>
            <div className="red-text password error">{form.passwordErrors}</div>
          </div>

          <div className="row">
            <div className="col s8 m6 blue-text">
              <select
                className="input-field search-select"
                value={ form.userType }
                id="userType"
                onChange={ handleUserTypeChange }
              >
                <option value="default" disabled={true}>
                  Select user type
                </option>
                <option value="agent" >Agent</option>
                <option value="client" >Client</option>
              </select>
              <div className="red-text password error">{form.userTypeError}</div>
            </div>
          </div>

          <input
            type="submit"
            className="waves-effect waves-light btn"
            value="Next"
          />

          <div>
            <Link to="#/">forgot password?</Link>
          </div>
          <div>
            <Link to="/signup">signup</Link>
          </div>

        </form>
      </div>
    </>
  );
};

export default Signup;
