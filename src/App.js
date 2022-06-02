import logo from "./logo.svg";
import "./App.css";
import React from "react";
import RegisterAndLogin from "./pages/RegisterAndLogin/RegisterAndLogin";
import { GlobalDataProvider } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard, Setting } from "./pages";
import HomePage from "./pages/HomePage/HomePage";
import PrivateRoute from "./components/PrivateRouter/PrivateRouter";
// HomePage
function App() {
  return (
    <BrowserRouter>
      <GlobalDataProvider>
        <div className="App">
          <Routes>
            <Route path="/Sign-in" element={<RegisterAndLogin />} />
            <Route path="/Setting" element={<Setting />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/DashBoard" element={<Dashboard />} />
            <Route element={<PrivateRoute />}>
              <Route path="/Dashboard" element={<Dashboard />} />
              {localStorage.getItem("roles") === "admin" && (
                <Route path="/Settings" element={<Setting />} />
              )}
            </Route>
            <Route path="*" element={<h1>404</h1>} />
          </Routes>
        </div>
      </GlobalDataProvider>
    </BrowserRouter>
  );
}

export default App;
