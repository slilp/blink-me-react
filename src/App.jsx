import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import GuestLayout from "./layouts/Guest";
import SuspenseWithChunkError from "./components/SuspenseWithChunkError";
import PageLoader from "./components/PageLoader";

export default class App extends Component {
  render() {

    return (
      <Switch>
        <SuspenseWithChunkError fallback={<PageLoader></PageLoader>}>
          <Route path="/">
            <GuestLayout></GuestLayout>
          </Route>
        </SuspenseWithChunkError>
      </Switch>
    );
  }
}
