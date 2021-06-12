import styled from "styled-components";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export const MainContainer = styled(Container)`
  height: 80vh;
`;

export const Card = styled.div`
  position: relative;
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding: 2rem;
  width: 50%;
  cursor: pointer;
  border-radius: 15px;
  height: 10rem;
  border: 2px solid ${(props) => (props.color ? props.color : "white")};

  transition: 0.3s ease-in-out;

  &:hover {
    border-left: 30px solid ${(props) => (props.color ? props.color : "white")};
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);

    img {
      transition: 0.3s;
      bottom: 5%;
    }
  }

  @media only screen and (max-width: 576px) {
    width: 100%;
  }
`;

export const Image = styled.img`
  position: absolute;
  height: 125px;
  width: 125px;
  bottom: -30%;
  right: 15px;
  transition: 0.3s ease-in-out;

  @media only screen and (max-width: 576px) {
    height: 90px;
    width: 90px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: black;
  }
`;
