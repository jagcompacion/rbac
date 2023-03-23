import roles from "../constants/roles";
import userTypes from "../constants/userTypes";

export const login = ({ email, password }) => {
  if (email === "counselor@gmail.com") {
    return {
      email,
      userType: userTypes.CWT_USER,
      roles: [roles.GLOBAL_MOBILE_COUNSELOR, roles.ROLE_UNMASK_CREDITCARD],
    };
  } else if (email === "ctm@gmail.com") {
    return {
      email,
      userType: userTypes.CWT_TRAVELER,
      roles: [roles.ROLE_CLIENT_TRAVELER_MAINTAINER],
    };
  } else if (email === "traveler@gmail.com") {
    return {
      email,
      userType: userTypes.CWT_TRAVELER,
      roles: [],
    };
  }
  return {
    error: "Cant login",
  };
};
