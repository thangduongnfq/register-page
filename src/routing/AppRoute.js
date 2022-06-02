import React from "react";
import { Routes, Route } from "react-router-dom";
import RegisterAndLogin from "../pages/RegisterAndLogin/RegisterAndLogin";
// RegisterAndLogin
import route from "./route";
export default function AppRoute() {
  let roles = localStorage.getItem("roles");
  //   const adminRoute = Object.values(route).map((item) => {
  //     if (item.roles.includes("admin"))
  //       return {
  //         component: item.component,
  //         path: item.path,
  //       };
  //   });
  const adminRoute = route.map(({ path, component }, key) => (
    <Route exact path={path} render={component} key={key} />
  ));
  const userRoute = route.map(({ path, component }, key) => (
    <Route path={path} element={component} />
  ));
  return <Routes></Routes>;
}
