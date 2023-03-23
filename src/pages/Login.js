import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { login } from "../api/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const response = login(loginData);
    localStorage.setItem("auth", JSON.stringify(response));
    navigate("/");
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    e.preventDefault();
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  return (
    <div className="pt-2">
      <Form onSubmit={handleSubmit}>
        <Form.Control
          className="mb-2"
          type="email"
          name="email"
          placeholder="Enter email"
          onChange={handleChange}
        />
        <Form.Control
          className="mb-2"
          type="password"
          name="password"
          placeholder="Enter password"
          onChange={handleChange}
        />
        <Button type="submit">Login</Button>
      </Form>
    </div>
  );
};

export default Login;
