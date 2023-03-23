import ROLES from "../constants/roles";

export const login = ({ email, password }) => {
  if (email === "counselor@gmail.com") {
    return {
      email,
      roles: [ROLES.Counselor],
    };
  } else if (email === "ctm@gmail.com") {
    return {
      email,
      roles: [ROLES.Ctm],
    };
  } else if (email === "traveler@gmail.com") {
    return {
      email,
      roles: [ROLES.Traveler],
    };
  }
  return {
    error: "Cant login",
  };
};
