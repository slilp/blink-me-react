import React, { Component } from "react";
import { Navbar, NavDropdown, Container } from "react-bootstrap";
import { FcHome, FcLike, FcIdea } from "react-icons/fc";
import { NavMain, Logo, NavMenu, NavDropdownMenu } from "./styles";

export default class NavBar extends Component {
  state = {
    expanded: false,
  };

  render() {
    return (
      <Navbar bg="light" expand="lg" expanded={this.state.expanded}>
        <Container>
          <Navbar.Brand onClick={() => this.setState({ expanded: false })}>
            <Logo to="/">
              BLINK.<span className="text-primary">REACT</span>
            </Logo>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() =>
              this.setState((prev) =>
                prev.expanded ? { expanded: false } : { expanded: "expanded" }
              )
            }
          />
          <Navbar.Collapse className="justify-content-end">
            <NavMain>
              <NavMenu
                className="pr-md-4 p-3"
                to="/"
                onClick={() => this.setState({ expanded: false })}
              >
                <FcHome className="mr-2"></FcHome>Home
              </NavMenu>
              <NavMenu
                className="pr-md-4 p-3"
                to="/ui"
                onClick={() => this.setState({ expanded: false })}
              >
                <FcLike className="mr-2"></FcLike>User Interface - UI
              </NavMenu>
              <NavMenu
                to="/react"
                className="pr-md-4 p-3"
                onClick={() => this.setState({ expanded: false })}
              >
                <FcIdea className="mr-2"></FcIdea>React
              </NavMenu>
            </NavMain>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
