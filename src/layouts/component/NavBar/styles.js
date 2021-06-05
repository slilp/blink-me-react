import styled from "styled-components";
import { Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NavMain = styled(Nav)`
  font-family: Rubik;
  text-align: center;
  font-size: 1.15rem;
`;

export const Logo = styled.h2`
  font-family: Rubik;
`;

export const NavMenu = styled(Link)`
  font-size: 1.25rem;
  color: black;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  &:hover,
  &:focus {
    text-decoration: none;
  }
`;

export const NavDropdownMenu = styled(Link)`
  &:hover,
  &:focus {
    text-decoration: none;
    color: black;
  }
  &:active {
    color: white;
  }
  display: flex;
  color: black;
  justify-content: flex-start;
`;
