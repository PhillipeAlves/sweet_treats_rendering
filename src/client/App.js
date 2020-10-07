import React from "react";
import { renderRoutes } from "react-router-config";
import Header from "./components/Header";
import { fetchCurrentUser } from "./actions";

const App = ({ location, route }) => {
  return (
    <div>
      <Header location={location.pathname} />
      {renderRoutes(route.routes)}
    </div>
  );
};
export default {
  component: App,
  loadData: ({ dispatch }) => dispatch(fetchCurrentUser()),
};
