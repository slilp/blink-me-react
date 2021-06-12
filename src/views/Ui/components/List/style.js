import styled from "styled-components";
import { Link } from "react-router-dom";

const blue = "#4086f6";

export const CardHead = styled.div`
  height: 12rem;
  margin: auto;
  border-radius: 15px;
  position: absolute;
  border-radius: 15px;
  top: 5%;
  width: 85%;
  left: 5%;
  z-index: 1;
  cursor: pointer;
  background-size: contain;
  transition: 0.3s ease-in-out;

  background-image: ${(props) =>
    props.img
      ? `url(${props.img})`
      : `url("https://lh3.googleusercontent.com/furN3VPqhmfMvpzbwhgx8LWQjyeI--2b3GwldMuiHWp7GwWgJOiqQUDJCki0fewfxbvIxUZr8H62pfdOeE-Eax-Fp3Y0S_8Ki31ppTY=s550")`};
`;

export const CardBody = styled.div`
  height: 14.5rem;
  position: absolute;
  border-radius: 15px;
  top: 7%;
  left: 10%;
  width: 85%;
  /* background-color: #4086f6; */
  cursor: pointer;
  border: 3px solid ${blue};
  transition: 0.3s ease-in-out;
`;

export const Card = styled.div`
  position: relative;
  height: 16.5rem;

  &:hover {
    div:nth-child(1) {
      transition: 0.3s;

      width: 90%;
      height: 13rem;
    }

    div:nth-child(2) {
      transition: 0.3s;
      /* top: 0;
      left: 0; */
      /* width: 100%; */
      height: 16rem;
      top: 5%;
      width: 90%;
      left: 5%;
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
