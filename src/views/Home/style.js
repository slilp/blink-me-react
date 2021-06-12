import styled from "styled-components";
import { sm } from "../../config/break-point";
import ReactBg from "../../style/img/tothemoon.jpg";
import { Link } from "react-router-dom";

export const ReactContent = styled.div`
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: #f8f8f8;
  }
`;

export const Icon = styled.img`
  width: ${(props) => (props.width ? props.width : "200px")};
  height: ${(props) => (props.height ? props.height : "200px")};
`;

export const LearnMoreText = styled.p`
  font-family: "Rubik";
  text-align: center;
  font-size: 1.25rem;
  color: #116dff;
  &:hover {
    color: #88b6ff;
  }
`;

export const MyBigButton = styled.button`
  font-size: 1.25rem;
  background-color: #116dff;
  color: white;
  border-radius: 25px;
  padding: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  border: none;
  cursor: pointer;
  font-family: "Rubik";
  transition: 0.2s;
  &:hover {
    background-color: #4086f6;
    transform: translateY(-2px);
  }
`;

export const BorderBlue = styled.div`
  background: linear-gradient(
    180deg,
    hsla(229deg, 100%, 67%, 0.1),
    transparent 3rem
  );

  height: 5rem;
`;

export const ExampleImg = styled.img`
  border-radius: 15px;
  height: 15rem;
  width: 100%;
  margin: auto;
  cursor: pointer;
  background-size: contain;
  background-image: ${(props) =>
    props.img
      ? `url(${props.img})`
      : `url("https://lh3.googleusercontent.com/furN3VPqhmfMvpzbwhgx8LWQjyeI--2b3GwldMuiHWp7GwWgJOiqQUDJCki0fewfxbvIxUZr8H62pfdOeE-Eax-Fp3Y0S_8Ki31ppTY=s550")`};
  &:hover {
    transform: translateY(-2px);
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  position: relative;
  padding-top: 7.5rem;
  padding-bottom: 7.5rem;
  background-image: url(${ReactBg});
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
