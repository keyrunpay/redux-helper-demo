import React from "react";
import { Route, NavLink } from "react-router-dom";
import Counter from "./pages/Counter";
import Users from "./pages/Users";
import CustomAction from "./pages/CustomAction";

function App() {
  return (
    <div>
      <h1 className="wrap my">Redux Helper Crash Course #Buggged</h1>
      <NavBar />
      <div className="app my">
        <div className="wrap">
          <Route path="/" exact component={Counter} />
          <Route path="/users" exact component={Users} />
          <Route path="/custom_action" exact component={CustomAction} />
        </div>
      </div>
    </div>
  );
}

const NavBar = () => {
  return (
    <nav>
      <div className="wrap">
        <ul>
          <li>
            <NavLink activeClassName="active" exact to="/">
              Counter
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" exact to="/users">
              Users
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" exact to="/custom_action">
              Custom Action Text
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default App;
