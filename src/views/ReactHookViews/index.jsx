import React from "react";
import { WrapContainer } from "./style";
import { useParams } from "react-router-dom";
import topics from "./topics";

function ReactHookViews() {
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

export default ReactHookViews;
