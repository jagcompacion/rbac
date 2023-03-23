const AccessControl = ({ allowedUserTypes, allowedRoles, children }) => {
  const authJSON = localStorage.getItem("auth");
  const auth = JSON.parse(authJSON);

  if (allowedUserTypes?.includes(auth?.userType)) {
    if (allowedRoles?.length) {
      return auth?.roles?.find((role) => allowedRoles?.includes(role))
        ? children
        : null;
    }
    return children;
  }
  return null;
};

export default AccessControl;
