import React from "react";
import topics from "./topics";
import Item from "../../Item";

function List({ search }) {
  return (
    <div>
      <div className="row">
        {topics
          .filter((topic) =>
            topic.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((v) => (
            <Item img={v.img} name={v.name} path={v.path()}></Item>
          ))}
      </div>
    </div>
  );
}

export default List;
