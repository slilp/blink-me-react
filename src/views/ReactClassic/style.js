import styled from "styled-components";
import { Container } from "react-bootstrap";

export const ButtonType = styled.button`
  font-size: 1rem;
  color: black;
  padding: 0.5rem;
  border: none;
  cursor: pointer;
  font-family: "Rubik";
  transition: 0.2s;
  width: 100%;
  background-color: white;
  border-radius: 15px;
  &:hover {
    border: 3px solid #4086f6;
  }
`;

export const Icon = styled.img`
  width: 50px;
  height: 50px;
`;

export const InputSearch = styled.input`
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  border: 2px solid #4086f6;
  font-size: 1.5rem;
  &:focus-visible {
    outline-offset: 0px;
    outline: 0;
  }
  height: 90%;
  width: 100%;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`;

export const ButtonSearch = styled.button`
  font-size: 1rem;
  color: black;
  border: none;
  cursor: pointer;
  font-family: "Rubik";
  transition: 0.1s;
  width: 75%;
  height: 90%;
  background-color: white;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  border: 2px solid #4086f6;
  border-left: 0px solid transparent;
  &:hover {
    background-color: #4086f6;
    color: white;
  }
`;

export const WrapContainer = styled(Container)`
  min-height: 80vh;
`;
