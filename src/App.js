import React, { Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "components/Header";
import NotFound from "./components/NotFound";
import Footer from "components/Footer";
import routes from "helper/RouterLink.data";
const { routerLink } = routes;
const ROUTER_LINK_LIST = routerLink();
function App() {
  console.log(ROUTER_LINK_LIST);
  return (
    <div className="app">
      <Suspense fallback={<h3>Loading...</h3>}>
        <BrowserRouter>
          <Header />
          <div className="pt-4">
            <Switch>
              <Redirect exact from="/" to="/home" />
              {ROUTER_LINK_LIST.map((item, index) => (
                <Route
                  path={item.link}
                  component={item.component}
                  key={index}
                />
              ))}
              <Route component={NotFound} />
            </Switch>
          </div>
          <Footer />
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
