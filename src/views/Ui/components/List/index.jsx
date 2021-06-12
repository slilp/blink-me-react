import React, { Component } from "react";
import Item from "./Item";
import topics from "./topics";

export default class List extends Component {
  render() {
    return (
      <div>
        <div className="row">
          {!this.props.type &&
            topics
              .filter((topic) =>
                topic.name
                  .toLowerCase()
                  .includes(this.props.search.toLowerCase())
              )
              .map((v) => (
                <Item img={v.img} name={v.name} path={v.path()}></Item>
              ))}
          {this.props.type &&
            topics
              .filter(
                (topic) =>
                  topic.type === this.props.type &&
                  topic.name
                    .toLowerCase()
                    .includes(this.props.search.toLowerCase())
              )
              .map((v) => (
                <Item img={v.img} name={v.name} path={v.path()}></Item>
              ))}
        </div>
      </div>
    );
  }
}
