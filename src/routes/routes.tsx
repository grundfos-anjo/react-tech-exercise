import { Routes, Route } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";
import { RootPage, LoginPage } from "../pages";
import { ROOT_PATH, LOGIN_PATH } from "./paths";

const RoutesWrapper = () => {
  return (
    <Routes>
      <Route path={LOGIN_PATH} element={<LoginPage />} />
      <Route
        path={ROOT_PATH}
        element={
          <ProtectedRoute>
            <RootPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default RoutesWrapper;
