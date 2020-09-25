import NotFound from "components/NotFound";
import React, { Suspense } from "react";
import {
  BrowserRouter,
  Link,
  Redirect,
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";
import ImportContentPage from "./ImportContentPage";
import LearnByHeartPage from "./LearnByHeartPage";

function Learning(props) {
  const match = useRouteMatch();
  console.log(match);
  return (
    <Suspense fallback={<h3>Loading...</h3>}>
      <BrowserRouter>
        <ul>
          <li>
            <Link to={match.path + "/learn-by-heart"}>/learn-by-heart</Link>
          </li>
        </ul>
        <Switch>
          <Redirect
          exact
            from={match.path}
            to={match.path + "/import-content"}
          />
          <Route
            path={match.path + "/import-content"}
            component={ImportContentPage}
          />
          <Route
            path={match.path + "/learn-by-heart"}
            component={LearnByHeartPage}
          />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default Learning;
