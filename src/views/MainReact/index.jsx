import React, { Component } from "react";
import { MainContainer, Card, Image, StyledLink } from "./style";
import { ReactIcon, StartupIcon, JestIcon } from "../../style/icons";
export default class MainReact extends Component {
  render() {
    return (
      <MainContainer className="d-flex flex-column justify-content-center align-items-center">
        <Card color="#D291BC">
          <StyledLink
            to="/classic"
            className="d-flex align-items-center w-100 h-100"
          >
            <h2 className="isRubik ml-5">React Classic</h2>
            <Image src={ReactIcon}></Image>
          </StyledLink>
        </Card>
        <Card color="#7BD8F1">
          <StyledLink
            to="/hook"
            className="d-flex align-items-center w-100 h-100"
          >
            <h2 className="isRubik ml-5">React Hook</h2>
            <Image src={StartupIcon}></Image>
          </StyledLink>
        </Card>
        <Card color="#FF6961">
          <StyledLink
            to="/hook"
            className="d-flex align-items-center w-100 h-100"
          >
            <h2 className="isRubik ml-5">React Testing</h2>
            <Image src={JestIcon}></Image>
          </StyledLink>
        </Card>
      </MainContainer>
    );
  }
}
