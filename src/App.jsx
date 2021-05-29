import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Routes from "./layouts/Route";
import SuspenseWithChunkError from "./components/SuspenseWithChunkError";
import PageLoader from "./components/PageLoader";

export default class App extends Component {
  render() {

    return (
      <Switch>
        <SuspenseWithChunkError fallback={<PageLoader></PageLoader>}>
          <Route path="/">
            <Routes></Routes>
          </Route>
        </SuspenseWithChunkError>
      </Switch>
    );
  }
}
