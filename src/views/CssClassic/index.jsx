import React, { Component } from "react";
import { CardHead, CardBody, Card } from "./style";

export default class CssClassic extends Component {
  render() {
    const loop = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
      <div>
        <div className="row">
          {loop.map((v) => (
            <div className="col-md-4 p-2">
              <Card>
                <CardHead></CardHead>
                <CardBody className="d-flex justify-content-center text-white align-items-end p-2">
                  12345678901234567890123
                </CardBody>
              </Card>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
