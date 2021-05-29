import React from "react";
import {  Route } from "react-router-dom";

const AdminLayout = ({ children }) => {
  return (
    <div>
      LAYOUT TWO
      {children}
    </div>
  );
};

function AdminLayoutRoute({ component: Component, ...rest }) {

  return (
    <Route
      {...rest}
      render={(props) => (
        <AdminLayout>
          <Component {...props} />
        </AdminLayout>
      )}
    />
  );
}

export default AdminLayoutRoute;
