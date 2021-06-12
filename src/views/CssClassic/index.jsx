import React, { Component } from "react";
import { useParams } from "react-router-dom";
import topics from "./topics";
import { WrapContainer } from "./style";

function CssClassic() {
  let { id } = useParams();
  const Content = topics[id];

  return (
    <WrapContainer className="mt-3 isRubik">
      <p className="text-primary">Home /</p>
      <br></br>
      <Content></Content>
    </WrapContainer>
  );
}

export default CssClassic;
