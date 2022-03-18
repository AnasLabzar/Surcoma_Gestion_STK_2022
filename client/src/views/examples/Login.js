/*!

=========================================================
* Argon Dashboard React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Surcoma (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Surcoma

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";
import React, { useEffect, useState } from "react";
import Axios from "axios";
import { setRef } from "@mui/material";
import { useHistory } from "react-router-dom";

const Login = () => {


  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const [error, setError] = useState(false);
  let history = useHistory();



  const login = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:8080/Surcoma/User/Login", {
      email,
      password,
    }).then(({data}) => {
      // console.log(response);
      console.log("response", data);
      localStorage.setItem("login", JSON.stringify({
        success: true,
        token: data
      })
      );
      setError("");
      setEmail("");
      setPassword("");
      history.push("/admin")
    })
      .catch((error) => setError(true))
  };
  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>Or sign in with credentials</small>
            </div>
            {error && <p className="text-red text-center text-[14px]">Incorrect Email or Password</p>}
            <Form data-testid="login-1" role="form" action="/admin" method="POST" onSubmit={login}>
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                    placeholder="Email"
                    type="email"
                    autoComplete="new-email"
                    value={email}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                    placeholder="Password"
                    type="password"
                    value={password}
                    autoComplete="new-password"
                  />
                </InputGroup>
              </FormGroup>
              <div className="custom-control custom-control-alternative custom-checkbox">
                <input
                  className="custom-control-input"
                  id=" customCheckLogin"
                  type="checkbox"
                />
                <label
                  className="custom-control-label"
                  htmlFor=" customCheckLogin"
                >
                  <span className="text-muted">Remember me</span>
                </label>
              </div>
              <div className="text-center">
                <Button
                  className="my-4"
                  color="primary"
                  type="submit"
                >
                  Sign in
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
        <Row className="mt-3">
          <Col xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <small>Forgot password?</small>
            </a>
          </Col>
          <Col className="text-right" xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
            </a>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default Login;
