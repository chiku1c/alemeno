import React from "react";
import Navbar from "../Navbar";
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";
import routes from "../../RoutesApp/routes";

const Layout = ({ childer }) => {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          {routes.map((route, index) => {
            return (
              <Route key={index} path={route.path} element={route.element} />
            );
          })}

          <Route path="*" element={<Navigate to="/course" replace />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Layout;
