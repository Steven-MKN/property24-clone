import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/*" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
