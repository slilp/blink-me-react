import styled from "styled-components";
import { Link } from "react-router-dom";
const blue = "#4086f6";

export const CardHead = styled.div`
  height: 10rem;
  width: 75%;
  margin: auto;
  cursor: pointer;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-size: contain;
  background-image: ${(props) =>
    props.img
      ? `url(${props.img})`
      : `url("https://lh3.googleusercontent.com/furN3VPqhmfMvpzbwhgx8LWQjyeI--2b3GwldMuiHWp7GwWgJOiqQUDJCki0fewfxbvIxUZr8H62pfdOeE-Eax-Fp3Y0S_8Ki31ppTY=s550")`};

  @media (max-width: 1025px) {
    width: 90%;
  }

  @media (max-width: 760px) {
    width: 80%;
  }
`;

export const CardBody = styled.div`
  height: 4rem;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  width: 75%;
  margin: auto;
  cursor: pointer;

  @media (max-width: 1025px) {
    width: 90%;
  }

  @media (max-width: 760px) {
    width: 80%;
  }
`;

export const Card = styled.div`
  &:hover {
    div:nth-child(1) {
      box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
      transition: 0.3s;
    }

    div:nth-child(2) {
      box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
      transition: 0.3s;
    }
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
