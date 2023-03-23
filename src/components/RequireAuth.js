import { useLocation, Navigate, Outlet } from "react-router-dom";

const RequireAuth = ({ allowedUserTypes, allowedRoles }) => {
  const authJSON = localStorage.getItem("auth");
  const auth = JSON.parse(authJSON);

  const location = useLocation();

  if (allowedUserTypes?.includes(auth?.userType)) {
    if (allowedRoles?.length) {
      return auth?.roles?.find((role) => allowedRoles?.includes(role)) ? (
        <Outlet />
      ) : (
        <Navigate to="/login" state={{ from: location }} replace />
      );
    }
    return <Outlet />;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default RequireAuth;
