import React, { useState } from "react";
import { FcCloseUpMode } from "react-icons/fc";
import List from "./components/List";
import Search from "./components/Search";
import { WrapContainer } from "./style";

export default function ReactHook() {
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const onChangeSearch = (event) => {
    if (!event.target.value) setSearch(event.target.value);

    setSearchInput(event.target.value);
  };

  const onSubmitSearch = (event) => {
    setSearch(searchInput.trim());
    event.preventDefault();
  };

  return (
    <WrapContainer className="isRubik">
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
      <Search
        onSubmitSearch={onSubmitSearch}
        onChangeSearch={onChangeSearch}
      ></Search>
      <List search={search}></List>
    </WrapContainer>
  );
}
