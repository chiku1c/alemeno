import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routeList } from "./index";
import PageRoute from "./PageRoute";

function RoutesComponent() {
  return (
    <Router>
      <Routes>
        {/* Private Route List */}
        {routeList.map(({ title, path, allowedRoles, element: Element }) => (
          <Route
            key={path}
            element={<PageRoute allowedRoles={allowedRoles} title={title} />}
          >
            <Route path={path} element={<Element />} />
          </Route>
        ))}
      </Routes>
    </Router>
  );
}

export default RoutesComponent;
