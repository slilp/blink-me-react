import React, { Component } from "react";
import { Container, Col, Row, FormGroup } from "react-bootstrap";
import { Text } from "../../style/component";
import { FaReact } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { AtomIcon, ProjectIcon, UiIcon, HeartIcon } from "../../style/icons";
import {
  MyBigButton,
  BorderBlue,
  ReactContent,
  Icon,
  LearnMoreText,
  ExampleImg,
  Footer,
} from "./style";

export default class Home extends Component {
  render() {
    return (
      <>
        <Container className="p-3">
          <br></br>
          <h3
            font="Rubik"
            className="d-inline-flex align-items-center isRubik font-weight-light"
          >
            <FaReact className="mr-2"></FaReact>
            My react world
          </h3>
          <br></br>
          <h1 className="isRubik pt-3 pb-3">
            <bold>
              This website is created for memorize all my learning/working in
              react.
            </bold>
          </h1>
          <h4 className="isRubik font-weight-light w-75">
            If It can help you to solve the problems you found It be my pleasure
            to me. Hope you to enjoy the react world 😀
          </h4>
          <div className="row mt-5">
            <div className="col-md-8 text-md-left text-center">
              <MyBigButton>Start the journey</MyBigButton>
            </div>
          </div>
        </Container>
        <BorderBlue className="mt-5"></BorderBlue>
        <Container>
          <div className="row isRubik">
            <ReactContent className="col-md-6 p-md-5 p-3">
              <div className="text-center">
                <Icon src={AtomIcon}></Icon>
              </div>
              <h6 className="text-center m-2">class component</h6>
              <h2 className="text-center m-2">React Classic</h2>
              <p>
                Class components can define functions that will execute during
                the component’s lifecycle. There are a total of seven lifecycle
                methods: componentWillMount, componentDidMount,
                componentWillReceiveProps, shouldComponentUpdate,
                componentWillUpdate, componentDidUpdate, and
                componentWillUnmount.
              </p>
              <LearnMoreText>
                Learn more <FiArrowRight></FiArrowRight>
              </LearnMoreText>
            </ReactContent>
            <ReactContent className="col-md-6 p-md-5 p-3">
              <div className="text-center">
                <Icon src={UiIcon}></Icon>
              </div>
              <h6 className="text-center m-2">function component</h6>
              <h2 className="text-center m-2">React Hook</h2>
              <p>
                Hooks are the new feature introduced in the React 16.8 version.
                It allows you to use state and other React features without
                writing a class. Hooks are the functions which "hook into" React
                state and lifecycle features from function components. It does
                not work inside classes.
              </p>
              <LearnMoreText>
                Learn more <FiArrowRight></FiArrowRight>
              </LearnMoreText>
            </ReactContent>
          </div>
          <hr></hr>
          <div className="mt-5 isRubik row">
            <div className="col-md-6 text-md-left text-center">
              <Icon width="60px" height="60px" src={HeartIcon}></Icon>
              <h5 className="text-primary mt-3">From react guy.</h5>
              <h2 className="text-danger">To react LOVER.</h2>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-6 p-2">
                  <ExampleImg className="img-thumbnail"></ExampleImg>
                </div>
                <div className="col-6 p-2">
                  <ExampleImg className="img-thumbnail"></ExampleImg>
                </div>
                <div className="col-6 p-2">
                  <ExampleImg className="img-thumbnail"></ExampleImg>
                </div>
                <div className="col-6 p-2">
                  <ExampleImg className="img-thumbnail"></ExampleImg>
                </div>
                <div className="col-6 p-2">
                  <ExampleImg className="img-thumbnail"></ExampleImg>
                </div>
                <div className="col-6 p-2">
                  <ExampleImg className="img-thumbnail"></ExampleImg>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <Footer>
          <h1 className="text-white">React To The Moon !</h1>
        </Footer>

        <div style={{ height: "50vh" }}></div>
      </>
    );
  }
}
