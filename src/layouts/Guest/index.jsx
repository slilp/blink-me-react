import React from "react";
import { Route } from "react-router-dom";

const GuestLayout = ({ children }) => {
  return <div>{children}</div>;
};

function GuestLayoutRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => (
        <GuestLayout>
          <Component {...props} />
        </GuestLayout>
      )}
    />
  );
}

export default GuestLayoutRoute;
