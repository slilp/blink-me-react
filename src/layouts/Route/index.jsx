import React, { useEffect } from "react";
import { useLocation, Switch } from "react-router-dom";
import GuestLayoutRoute from "../Guest";
import LayoutTwoRoute from "../LayoutTwo";
import LayoutOneRoute from "../LayoutOne";
import routes from "../routes";

function Routes() {
  const location = useLocation();

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [location]);

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === 'LayoutOne') {
        return (
          <LayoutOneRoute
            component={prop.component}
            path={prop.path}
            exact={prop.exact}
            key={key}
          />
        );
      } else  if (prop.layout === 'LayoutTwo') {
        return (
          <LayoutTwoRoute
            component={prop.component}
            path={prop.path}
            exact={prop.exact}
            key={key}
          />
        );
      } else {
        return (
          <GuestLayoutRoute
            component={prop.component}
            path={prop.path}
            exact={prop.exact}
            key={key}
          />
        );
      }
    });
  };

  return <Switch>{getRoutes(routes)}</Switch>;
}

export default Routes;
