import styled from "styled-components";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NavMain = styled(Nav)`
  font-family: Rubik;
  text-align: center;
`;

export const Logo = styled(Link)`
  font-family: Rubik;
  font-size: 1.75rem;
  color: black;
  &:hover,
  &:focus {
    text-decoration: none;
    color: black;
  }
`;

export const NavMenu = styled(Link)`
  font-size: 1rem;
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
  text-align: center;
  color: black;
`;
