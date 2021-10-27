import loadable from "@loadable/component";

import { RouteConfig } from "react-router-config";

export const routes: RouteConfig[] = [
  {
    path: "/home",
    component: loadable(() => import("../pages/Home")),
    exact: true,
  },
];
