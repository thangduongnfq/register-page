import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
// navbar
const PrivateRoute = () => {
  const token =
    localStorage.getItem("token") || sessionStorage.getItem("token");
  if (
    token !==
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlRoYW5nIGR1b25nIiwiaWF0IjoxNTE2MjM5MDIyfQ.WB2dscqUQHLo8XZjOKjC8EQJEkDlbEkHdn7maOr1yDI" &&
    token !==
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlRoYW5nIGR1b25nIiwiaWF0IjoxNTE2MjM5MDIyfQ.WB2dscqUQHLo8XZjOKjC8EQJEkDlbEkHdn7maOr1yDI"
  ) {
    return <Navigate to={"/sign-in"} replace />;
  }

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default PrivateRoute;
