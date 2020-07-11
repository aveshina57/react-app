import React, { useEffect } from "react";
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  BrowserRouter as Router,
} from "react-router-dom";
import { TodoList, Kalkulator, Form } from "./index";

export default function Users() {
  let match = useRouteMatch();

  console.log(match);

  return (
    <Router>
      <div className="other">
        <header className="list">
          <ul>
            <li className="li">
              <Link to={`${match.url}/Todo`}>To do</Link>
            </li>
            <li className="li">
              <Link to={`${match.url}/Kalkulator`}>Kalkulator</Link>
            </li>
            <li className="li">
              <Link to={`${match.url}/form`}>form</Link>
            </li>
          </ul>
        </header>

        <Switch>
          <Route exact path={`${match.url}/Todo`}>
            <TodoList />
          </Route>

          <Route exact path={`${match.url}/Kalkulator`}>
            <Kalkulator />
          </Route>

          <Route exact path={`${match.url}/form`}>
            <Form />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
