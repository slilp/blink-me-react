import React, { useEffect } from "react";
import NavBar from '../component/NavBar';
import Footer from '../component/Footer';
import { useLocation, Route, Switch } from "react-router-dom";
import routes from "../routes";

function GuestLayout() {
  const location = useLocation();

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
        return (
          <Route
            path={prop.path}
            render={(props) => <prop.component {...props} />}
            key={key}
          />
        );
    });
  };

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [location]);

  return (
    <div>
      <NavBar/>
      <div>
        <div>
          <Switch>{getRoutes(routes)}</Switch>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default GuestLayout;
