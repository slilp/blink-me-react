import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { FaReact } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { HeartIcon } from "../../style/icons";
import { exampleImgs, contents } from "./data.js";
import { Link } from "react-router-dom";
import topicsUI from "../Ui/components/List/topics";
import {
  MyBigButton,
  BorderBlue,
  ReactContent,
  Icon,
  LearnMoreText,
  ExampleImg,
  StyledLink,
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
              <Link to="/ui">
                <MyBigButton>Start the journey</MyBigButton>
              </Link>
            </div>
          </div>
        </Container>
        <BorderBlue className="mt-5"></BorderBlue>
        <Container>
          <div className="row isRubik">
            {contents.map((content) => (
              <ReactContent className="col-md-6 p-md-5 p-3">
                <StyledLink to={content.learn}>
                  <div className="text-center">
                    <Icon src={content.img}></Icon>
                  </div>
                  <h6 className="text-center m-2">{content.subTopic}</h6>
                  <h2 className="text-center m-2">{content.topic}</h2>
                  <p>{content.desc}</p>
                  <LearnMoreText>
                    Learn more <FiArrowRight></FiArrowRight>
                  </LearnMoreText>
                </StyledLink>
              </ReactContent>
            ))}
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
                {topicsUI.slice(0, 6).map((value) => (
                  <div className="col-6 p-2">
                    <Link to={value.path()}>
                      <ExampleImg
                        img={value.img}
                        className="img-thumbnail"
                      ></ExampleImg>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
        {/* <Footer className="mt-5">
          <h1 className="text-white">React To The Moon !</h1>
        </Footer> */}
      </>
    );
  }
}
