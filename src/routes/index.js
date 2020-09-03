import React, { lazy } from "react";

const NotFound = lazy(() =>
  import(/* webpackChunkName: "404'"*/ "../pages/404"),
);
const LoginPage = lazy(() =>
  import(/* webpackChunkName: "404'"*/ "../pages/login"),
);

const Users = lazy(() =>
  import(/* webpackChunkName: "404'"*/ "../pages/users"),
);

const DashBoard = lazy(() => import("../pages/dashboard"));

const routes = [
  {
    key: "home",
    path: "/",
    component: DashBoard,
    exact: true,
    componentName: "home",
  },
  {
    key: "users",
    path: "/users",
    component: Users,
    exact: true,
    componentName: "users",
  },
  {
    key: "loginpage",
    path: "/login",
    component: LoginPage,
    exact: true,
    componentName: "login",
  },
  {
    key: "notFound",
    path: "/notfound",
    component: NotFound,
    exact: true,
    componentName: "notfound",
  },
];

export default routes;
