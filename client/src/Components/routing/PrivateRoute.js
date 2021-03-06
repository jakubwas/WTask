// Dependenceis
import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
// Context API
import AuthContext from "../../Context/auth/authContext";
// React Component
const PrivateRoute = ({ component: Component, ...rest }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, loading } = authContext;

  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticated && !loading ? (
          <Redirect to="/register" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivateRoute;
