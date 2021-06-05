import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch } from "react-router-dom";
import Routes from "./layouts/Route";
import NavBar from "./layouts/component/NavBar";
import SuspenseWithChunkError from "./components/SuspenseWithChunkError";
import PageLoader from "./components/PageLoader";

export default class App extends Component {
  render() {
    return (
      <>
        <NavBar></NavBar>
        <Switch>
          <SuspenseWithChunkError fallback={<PageLoader></PageLoader>}>
            <Routes></Routes>
          </SuspenseWithChunkError>
        </Switch>
      </>
    );
  }
}
