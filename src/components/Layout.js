import { Outlet, useNavigate, Link } from "react-router-dom";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import AccessControl from "./AccessControl";
import userTypes from "../constants/userTypes";
import roles from "../constants/roles";

const Layout = () => {
  const authJSON = localStorage.getItem("auth");
  const auth = JSON.parse(authJSON);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/");
  };
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Portrait
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <AccessControl allowedUserTypes={[userTypes.CWT_TRAVELER]}>
              <Nav.Link as={Link} to="/profile">
                Profile
              </Nav.Link>
            </AccessControl>
            <AccessControl
              allowedUserTypes={[userTypes.CWT_TRAVELER, userTypes.CWT_USER]}
              allowedRoles={[
                roles.GLOBAL_MOBILE_COUNSELOR,
                roles.ROLE_CLIENT_TRAVELER_MAINTAINER,
              ]}
            >
              <Nav.Link as={Link} to="/travelers">
                Travelers
              </Nav.Link>
            </AccessControl>
            <AccessControl
              allowedUserTypes={[userTypes.CWT_USER]}
              allowedRoles={[roles.GLOBAL_MOBILE_COUNSELOR]}
            >
              <Nav.Link as={Link} to="/counselors">
                Counselors
              </Nav.Link>
            </AccessControl>
          </Nav>
          {auth ? (
            <Button onClick={handleLogout}>Logout</Button>
          ) : (
            <Button variant="success" as={Link} to="/login">
              Login
            </Button>
          )}
        </Container>
      </Navbar>
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
