import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home, Other, Users } from "../views/index";

import "../views/home/home.scss";
import "../views/style.scss";

function Rrd() {
  return (
    <Router>
      <div className="App">
        <header className="nav">
          <ul>
            <li>
              <Link className="li" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="li" to="/Other">
                About
              </Link>
            </li>
            <li>
              <Link className="li" to="/users">
                Tools
              </Link>
            </li>
          </ul>
        </header>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/Other">
            <Other />
          </Route>

          <Route path="/users">
            <Users />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Rrd;
