import React from "react";
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  BrowserRouter as Router,
} from "react-router-dom";
import { Skill, Mood } from "./index";
import "./other.scss";

export default function Other() {
  let match = useRouteMatch();

  console.log(match);

  return (
    <Router>
      <div className="other">
        <header className="list">
          <ul>
            <li className="li">
              <Link to={`${match.url}/Skill`}>Skill</Link>
            </li>
            <li className="li">
              <Link to={`${match.url}/Mood`}>Mood</Link>
            </li>
          </ul>
        </header>

        <Switch>
          <Route exact path={`${match.url}/Skill`}>
            <Skill />
          </Route>

          <Route path={`${match.url}/Mood`}>
            <Mood />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
