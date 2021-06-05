import React, { Component } from "react";
import { Navbar, NavDropdown, Container } from "react-bootstrap";
import { FcHome, FcLike, FcIdea } from "react-icons/fc";
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
              <NavMenu className="pr-md-4 p-3" to="/">
                <FcHome className="mr-2"></FcHome>Home
              </NavMenu>
              <NavMenu className="pr-md-4 p-3" to="/ui">
                <FcLike className="mr-2"></FcLike>User Interface - UI
              </NavMenu>
              <NavDropdown className="order-1 order-md-0 d-md-inline-flex align-items-center">
                <NavDropdown.Item className="text-center">
                  <NavDropdownMenu to="/classic">React Classic</NavDropdownMenu>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="text-center">
                  <NavDropdownMenu to="/hook">React Hook</NavDropdownMenu>
                </NavDropdown.Item>
              </NavDropdown>
              <NavMenu to="/react" className="pr-md-4 p-3">
                <FcIdea className="mr-2"></FcIdea>React
              </NavMenu>
            </NavMain>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
