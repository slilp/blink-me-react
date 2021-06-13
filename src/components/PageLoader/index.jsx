import React, { Component } from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";

const WrapContainer = styled(Container)`
  min-height: 80vh;
`;
export default class PageLoader extends Component {
  render() {
    return (
      <WrapContainer className="d-flex align-items-center isRubik justify-content-center">
        <h1>LOADING...</h1>
      </WrapContainer>
    );
  }
}
