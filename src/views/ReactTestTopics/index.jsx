import React from "react";
import topics from "./topics";

function ReactTestTopics() {
  const TopicDisplay = topics["002"];

  return (
    <div>
      This is topics page
      <TopicDisplay></TopicDisplay>
    </div>
  );
}

export default ReactTestTopics;
