import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { FcCloseUpMode } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import {
  BoostrapIcon,
  MaterialUiIcon,
  CssIcon,
  HeartIcon,
} from "../../style/icons";
import { ButtonType, Icon, InputSearch, ButtonSearch } from "./style";
import List from "./components/List";

export default function ReactHook() {
  return (
    <Container className="isRubik">
      <br></br>
      <div className="row">
        <div className="col-md-3">
          <h1>
            <FcCloseUpMode></FcCloseUpMode>
          </h1>
          <h5 className="text-success mt-2">Function Component</h5>
          <h2 className="pt-2 pb-2">
            <bold>React Hook</bold>
          </h2>
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
      <List></List>
    </Container>
  );
}
