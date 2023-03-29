import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import RequireAuth from "./components/RequireAuth";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Travelers from "./pages/Travelers";
import PageNotFound from "./pages/PageNotFound";
import Counselors from "./pages/Counselors";
import userTypes from "./constants/userTypes";
import roles from "./constants/roles";

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

      <Route
        element={<RequireAuth allowedUserTypes={[userTypes.CWT_TRAVELER]} />}
      >
        <Route path="/profile" element={<Profile />} />
      </Route>

      <Route
        element={
          <RequireAuth
            allowedUserTypes={[userTypes.CWT_TRAVELER, userTypes.CWT_USER]}
            allowedRoles={[
              roles.GLOBAL_MOBILE_COUNSELOR,
              roles.ROLE_CLIENT_TRAVELER_MAINTAINER,
            ]}
          />
        }
      >
        <Route path="/travelers" element={<Travelers />} />
      </Route>

      <Route
        element={
          <RequireAuth
            allowedUserTypes={[userTypes.CWT_USER]}
            allowedRoles={[roles.GLOBAL_MOBILE_COUNSELOR]}
          />
        }
      >
        <Route path="/counselors" element={<Counselors />} />
      </Route>

      <Route path="/*" element={<PageNotFound />} />
    </Route>
  </Routes>
);

export default App;
