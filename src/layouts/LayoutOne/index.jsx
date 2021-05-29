import React from "react";
import {  Route } from "react-router-dom";
import NavBar from '../component/NavBar';

const LayoutOne = ({ children }) => {
  return (
    <>
      <NavBar></NavBar>
      {children}
    </>
  );
};

function LayoutOneRoute({ component: Component, ...rest }) {

  return (
    <Route
      {...rest}
      render={(props) => (
        <LayoutOne>
          <Component {...props} />
        </LayoutOne>
      )}
    />
  );
}

export default LayoutOneRoute;
