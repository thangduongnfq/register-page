import logo from "./logo.svg";
import "./App.css";
import React from "react";
import RegisterAndLogin from "./pages/RegisterAndLogin/RegisterAndLogin";
import { GlobalDataProvider } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard, Setting, NotFoundPage, AnimalsPage } from "./pages";
import HomePage from "./pages/HomePage/HomePage";
import PrivateRoute from "./components/PrivateRouter/PrivateRouter";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <GlobalDataProvider>
        <div className="App">
          <Routes>
            <Route path="/register-page" element={<RegisterAndLogin />} />
            <Route path="/" element={<HomePage />} />
            <Route element={<PrivateRoute />}>
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/Animals" element={<AnimalsPage />} />
              {localStorage.getItem("roles") === "admin" && (
                <>
                  <Route path="/Settings" element={<Setting />} />
                </>
              )}
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </GlobalDataProvider>
    </BrowserRouter>
  );
}

export default App;
