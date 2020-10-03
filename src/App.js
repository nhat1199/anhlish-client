import React, { Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "components/Header";
import HomePage from "./pages/HomePage";
import Learning from "./pages/Learning";
import NotFound from "./components/NotFound";
import ImportContentPage from "pages/Learning/ImportContentPage";
import Footer from "components/Footer";

function App() {
  return (
    <div className="app">
    <Suspense fallback={<h3>Loading...</h3>}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route path="/home" component={HomePage} />
          <Route path="/learning" component={Learning} />
          <Route component={NotFound} />
        </Switch>
        <Footer className="mt-auto"/>
      </BrowserRouter>
    </Suspense>
    </div>
  );
}

export default App;
