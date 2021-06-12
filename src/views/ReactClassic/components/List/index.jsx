import React, { Component } from "react";
import topics from "./topics";
import Item from "../../Item";

export default class List extends Component {
  render() {
    return (
      <div>
        <div className="row">
          {topics
            .filter((topic) =>
              topic.name.toLowerCase().includes(this.props.search.toLowerCase())
            )
            .map((v) => (
              <Item img={v.img} name={v.name} path={v.path()}></Item>
            ))}
        </div>
      </div>
    );
  }
}
