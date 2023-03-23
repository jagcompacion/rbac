import { Outlet, useNavigate, Link } from "react-router-dom";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import AccessControl from "./AccessControl";
import ROLES from "../constants/roles";

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
            <AccessControl allowedRoles={[ROLES.Traveler, ROLES.Ctm]}>
              <Nav.Link as={Link} to="/profile">
                Profile
              </Nav.Link>
            </AccessControl>
            <AccessControl allowedRoles={[ROLES.Ctm, ROLES.Counselor]}>
              <Nav.Link as={Link} to="/travelers">
                Travelers
              </Nav.Link>
            </AccessControl>
            <AccessControl allowedRoles={[ROLES.Counselor]}>
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
