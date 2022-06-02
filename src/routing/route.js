import Dashboard from "../pages/Dashboard/Dashboard";
import Setting from "../pages/Setting/Setting";
export default [
  {
    path: "/Dashboard",
    component: Dashboard,
    roles: ["admin", "user"],
  },
  {
    path: "/Settings",
    component: Setting,
    roles: ["admin"],
  },
];
