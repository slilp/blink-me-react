import React, { Component } from "react";
import styled from "styled-components";
import TopicCard from "./component/TopicCard";
import Info from "./component/Info";
import reactIcon from "../../style/icons/atom.png";
import projectIcon from "../../style/icons/project-management.png";
import uiIcon from "../../style/icons/user-interface.png";
import Token from "./component/Token";
import {
  Page,
  MainContainer,
  TopSection,
  Section,
  TopImage,
  Container,
  DescriptionText,
  BigText,
  Border,
  MiddleText,
  StatrBtn,
  Flex,
} from "./style";

const topics = [
  {
    name: "User Interface",
    desc: "All my UI implemented from pure CSS and other CSS framework.",
    img: uiIcon,
    path: "test",
  },
  {
    name: "React Feature",
    desc: "React feature for example componentDidMount , useEffect , state management , redux etc.",
    img: reactIcon,
    path: "test",
  },
  {
    name: "Use case",
    desc: "Any use case that you maybe found in your project",
    img: projectIcon,
    path: "test",
  },
];
export default class Home extends Component {
  render() {
    return <div className="d-flex align-items-center">This is Home page</div>;
  }
}
