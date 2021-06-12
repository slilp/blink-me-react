import React, { Component } from "react";
import topics from "./topics";
import { WrapContainer } from "./style";

export default class ReactClassicViews extends Component {
  render() {
    const Content = topics[this.props.match.params.id];

    return (
      <WrapContainer className="mt-3 isRubik">
        <p className="text-primary">Home /</p>
        <br></br>
        <Content></Content>
      </WrapContainer>
    );
  }
}
