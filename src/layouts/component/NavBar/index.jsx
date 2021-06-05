import React, { Component } from "react";
import { Navbar, NavDropdown, Container } from "react-bootstrap";
import { FcHome, FcLike, FcIdea, FcMinus } from "react-icons/fc";
import { NavMain, Logo, NavMenu, NavDropdownMenu } from "./styles";

export default class NavBar extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <Logo>
              BLINK.<span className="text-primary">REACT</span>
            </Logo>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <NavMain>
              <NavMenu className="mr-0 mr-md-5" to="/">
                <FcHome className="mr-2"></FcHome>Home
              </NavMenu>
              <NavMenu className="mr-0 mr-md-5" to="/ui">
                <FcLike className="mr-2"></FcLike>User Interface - UI
              </NavMenu>
              <NavDropdown>
                <NavDropdown.Item className="text-center">
                  <NavDropdownMenu to="/classic">
                    <FcMinus className="mr-2"></FcMinus>Classic
                  </NavDropdownMenu>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="text-center">
                  <NavDropdownMenu to="/hook">
                    <FcMinus className="mr-2"></FcMinus>Hook
                  </NavDropdownMenu>
                </NavDropdown.Item>
              </NavDropdown>
              <NavMenu to="/react">
                <FcIdea className="mr-2"></FcIdea>React
              </NavMenu>
            </NavMain>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
