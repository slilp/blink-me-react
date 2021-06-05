import React, { lazy } from "react";

const Home = lazy(() => import("../views/Home"));
const Boostrap = lazy(() => import("../views/Boostrap"));
const CssClassic = lazy(() => import("../views/CssClassic"));
const MaterialUi = lazy(() => import("../views/MaterialUi"));
const MainReact = lazy(() => import("../views/MainReact"));
const ReactClassic = lazy(() => import("../views/ReactClassic"));
const ReactHook = lazy(() => import("../views/ReactHook"));
const Ui = lazy(() => import("../views/Ui"));
const NotFound = lazy(() => import("../views/NotFound"));

const routes = [
  {
    path: "/",
    exact: true,
    name: "Home",
    component: Home,
    layout: "LayoutOne",
  },
  {
    path: "/boostrap",
    exact: true,
    name: "Boostrap",
    component: Boostrap,
    layout: "LayoutOne",
  },
  {
    path: "/css",
    exact: true,
    name: "CssClassic",
    component: CssClassic,
    layout: "LayoutOne",
  },
  {
    path: "/materialui",
    exact: true,
    name: "MaterialUi ",
    component: MaterialUi,
    layout: "LayoutOne",
  },
  {
    path: "/react",
    exact: true,
    name: "MainReact",
    component: MainReact,
    layout: "LayoutOne",
  },
  {
    path: "/hook",
    exact: true,
    name: "ReactHook",
    component: ReactHook,
    layout: "LayoutOne",
  },
  {
    path: "/classic",
    exact: true,
    name: "ReactClassic",
    component: ReactClassic,
    layout: "LayoutOne",
  },
  {
    path: "/ui",
    exact: true,
    name: "Ui",
    component: Ui,
    layout: "LayoutOne",
  },
  {
    path: "/no",
    exact: true,
    name: "NotFound",
    component: NotFound,
    layout: "LayoutOne",
  },
];

export default routes;
