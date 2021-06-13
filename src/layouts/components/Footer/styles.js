import styled from "styled-components";

export const Logo = styled.img`
  width: 100px;
  height: 100px;
`;

export const Link = styled.a`
  text-decoration: none;
  color: white;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: white;
  }
`;
