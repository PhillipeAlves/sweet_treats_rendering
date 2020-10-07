import React from "react";
import App from "./App";
import HomePage from "./pages/HomePage";
import Resources from "./pages/Resources";
import NotFoundPage from "./pages/NotFoundPage";
import RecipesPage from "./pages/RecipesPage";

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: "/",
        exact: true,
      },
      {
        ...RecipesPage,
        path: "/recipes",
      },
      {
        ...Resources,
        path: "/resources",
      },
      {
        ...NotFoundPage,
      },
    ],
  },
];
