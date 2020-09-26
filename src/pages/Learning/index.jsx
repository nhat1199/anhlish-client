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
import QuizPage from "./QuizPage";

function Learning(props) {
  const match = useRouteMatch();
  console.log(match);
  return (
    <Suspense fallback={<h3>Loading...</h3>}>
      <BrowserRouter>
        <ul>
          <li>
            <Link to={match.path + "/import-content"}>/import-content</Link>
          </li>
          <li>
            <Link to={match.path + "/learn-by-heart"}>/learn-by-heart</Link>
          </li>
          <li>
            <Link to={match.path + "/Quiz"}>/Quiz</Link>
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
          <Route
            path={match.path + "/quiz"}
            component={QuizPage}
          />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default Learning;
