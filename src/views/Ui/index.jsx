import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { FcTemplate } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import {
  BoostrapIcon,
  MaterialUiIcon,
  CssIcon,
  HeartIcon,
} from "../../style/icons";
import { ButtonType, Icon, InputSearch, ButtonSearch } from "./style";
import CssClassic from "../CssClassic";
export default class Ui extends Component {
  render() {
    return (
      <Container className="isRubik">
        <br></br>
        <div className="row">
          <div className="col-md-3">
            <h1>
              <FcTemplate></FcTemplate>
            </h1>
            <h5 className="text-warning mt-2">User Interface</h5>
            <h2 className="pt-2 pb-2">
              <bold>React UI</bold>
            </h2>
          </div>
          <div className="col-md-9 my-auto">
            <div className="row">
              <div className="col-md-3 col-6 p-1">
                <ButtonType className="text-left text-md-center">
                  <Icon src={HeartIcon} className="mr-2"></Icon>ALL
                </ButtonType>
              </div>
              <div className="col-md-3 col-6 p-1">
                <ButtonType className="text-left text-md-center">
                  <Icon src={CssIcon} className="mr-2"></Icon>CSS
                </ButtonType>
              </div>
              <div className="col-md-3 col-6 p-1">
                <ButtonType className="text-left text-md-center">
                  <Icon src={BoostrapIcon} className="mr-2"></Icon>
                  Boostrap
                </ButtonType>
              </div>
              <div className="col-md-3 col-6 p-1">
                <ButtonType className="text-left text-md-center">
                  <Icon src={MaterialUiIcon} className="mr-2"></Icon>Material-UI
                </ButtonType>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <div className="mx-auto mb-5">
          <div className="d-flex ">
            <div className="col-8 text-right pr-0">
              <InputSearch className="text-center"></InputSearch>
            </div>
            <div className="col-4 text-left pl-0">
              <ButtonSearch className="p-2">
                <BsSearch className="mr-2"></BsSearch>Search
              </ButtonSearch>
            </div>
          </div>
        </div>
        <CssClassic></CssClassic>
      </Container>
    );
  }
}
