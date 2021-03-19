import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import axios from "axios";
// import { api } from "./config";
import { useState } from "react";
import PropertyCreate from "./components/PropertyCreate";
import PropertyPage from "./components/PropertyPage";

axios.interceptors.request.use(
  (config) => {
    // const { origin } = new URL(config.url);
    // const allowedOrigins = [api];
    const token = localStorage.getItem("token");

    //if (allowedOrigins.includes(origin)) {
    config.headers.authorization = `Bearer ${token}`;
    //}

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

function App() {
  const token = localStorage.getItem("token");
  const isAgent = localStorage.getItem("isAgent");
  const [auth, setAuth] = useState({
    token,
    isAgent,
  });

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar auth={auth} setAuth={setAuth} />
        <Switch>
          <Route path="/login">
            <Login setAuth={setAuth} />
          </Route>
          <Route path="/signup">
            <Signup setAuth={setAuth} />
          </Route>
          <Route path="/property/create">
            <PropertyCreate auth={auth} />
          </Route>
          <Route path="/property/:id">
            <PropertyPage auth={auth} />
          </Route>
          <Route path="/*">
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
