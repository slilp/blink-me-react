import React, { Component } from "react";
import { CardHead, CardBody, Card, StyledLink } from "./style";

export default class Item extends Component {
  render() {
    return (
      <div className="col-md-4 col-sm-6 p-2">
        <StyledLink to={this.props.path} style={{ textDecoration: "none" }}>
          <Card>
            <CardHead img={this.props.img}></CardHead>
            <CardBody className="text-break d-flex justify-content-center bg-light align-items-end p-2">
              {this.props.name}
            </CardBody>
          </Card>
        </StyledLink>
      </div>
    );
  }
}
