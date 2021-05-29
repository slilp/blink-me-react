import React from "react";
import {  Route } from "react-router-dom";

const LayoutTwo = ({ children }) => {
  return (
    <div>
      LAYOUT TWO
      {children}
    </div>
  );
};

function LayoutTwoRoute({ component: Component, ...rest }) {

  return (
    <Route
      {...rest}
      render={(props) => (
        <LayoutTwo>
          <Component {...props} />
        </LayoutTwo>
      )}
    />
  );
}

export default LayoutTwoRoute;
