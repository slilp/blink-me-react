import React, { Component } from "react";
import { FcServices } from "react-icons/fc";
import List from "./components/List";
import Search from "./components/Search";
import { WrapContainer } from "./style";
export default class ReactClassic extends Component {
  state = {
    search: "",
    searchInput: "",
  };

  onChangeSearch = (event) => {
    if (!event.target.value) this.setState({ search: event.target.value });

    this.setState({ searchInput: event.target.value });
  };

  onSubmitSearch = (event) => {
    this.setState((prev) => ({
      search: prev.searchInput.trim(),
    }));
    event.preventDefault();
  };

  render() {
    return (
      <WrapContainer className="isRubik">
        <br></br>
        <div className="row">
          <div className="col-md-3">
            <h1>
              <FcServices></FcServices>
            </h1>
            <h5 className="text-success mt-2">Class Component</h5>
            <h2 className="pt-2 pb-2">
              <bold>React Classic</bold>
            </h2>
          </div>
        </div>
        <br></br>
        <Search
          onSubmitSearch={this.onSubmitSearch}
          onChangeSearch={this.onChangeSearch}
        ></Search>
        <List search={this.state.search}></List>
      </WrapContainer>
    );
  }
}
