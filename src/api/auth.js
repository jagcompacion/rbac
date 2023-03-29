import users from "../constants/users.json";

export const login = ({ email, password }) => {
  return (
    users[email] || {
      error: "Cant login",
    }
  );
};
