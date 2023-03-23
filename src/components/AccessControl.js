const AccessControl = ({ allowedRoles, children }) => {
  const authJSON = localStorage.getItem("auth");
  const auth = JSON.parse(authJSON);

  return auth?.roles?.find((role) => allowedRoles?.includes(role))
    ? children
    : null;
};

export default AccessControl;
