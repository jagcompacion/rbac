import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import RequireAuth from "./components/RequireAuth";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Travelers from "./pages/Travelers";
import ROLES from "./constants/roles";
import PageNotFound from "./pages/PageNotFound";
import Counselors from "./pages/Counselors";

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

      <Route
        element={<RequireAuth allowedRoles={[ROLES.Traveler, ROLES.Ctm]} />}
      >
        <Route path="/profile" element={<Profile />} />
      </Route>

      <Route
        element={<RequireAuth allowedRoles={[ROLES.Ctm, ROLES.Counselor]} />}
      >
        <Route path="/travelers" element={<Travelers />} />
      </Route>

      <Route element={<RequireAuth allowedRoles={[ROLES.Counselor]} />}>
        <Route path="/counselors" element={<Counselors />} />
      </Route>

      <Route path="/*" element={<PageNotFound />} />
    </Route>
  </Routes>
);

export default App;
