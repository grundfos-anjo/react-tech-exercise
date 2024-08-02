import { Navigate } from "react-router-dom";
import useUser from "../provider/user-provider";

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { userContext } = useUser();
  const { isAuthenticated } = userContext;

  if (!isAuthenticated()) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
