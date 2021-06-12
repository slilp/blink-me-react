import React, { Component } from "react";
import { FcTemplate } from "react-icons/fc";
import ListItem from "./components/List";
import Search from "./components/Search";
import Type from "./components/Type";
import { WrapContainer } from "./style";

const typeList = [
  {
    name: "ALL",
    type: "",
  },
  {
    name: "CSS",
    type: "css",
  },
  {
    name: "Boostrap",
    type: "boostrap",
  },
  {
    name: "Material-UI",
    type: "materialui",
  },
];

export default class Ui extends Component {
  state = {
    search: "",
    searchInput: "",
    type: "",
  };

  onChangeType = (_type) => {
    this.setState({ type: _type });
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
              <FcTemplate></FcTemplate>
            </h1>
            <h5 className="text-warning mt-2">User Interface</h5>
            <h2 className="pt-2 pb-2">
              <bold>React UI</bold>
            </h2>
          </div>
          <div className="col-md-9 my-auto">
            <div className="row">
              {typeList.map((value) => (
                <Type
                  name={value.name}
                  typeSelected={this.state.type}
                  type={value.type}
                  onChangeType={this.onChangeType}
                ></Type>
              ))}
            </div>
          </div>
        </div>
        <br></br>
        <Search
          onSubmitSearch={this.onSubmitSearch}
          onChangeSearch={this.onChangeSearch}
        ></Search>
        <ListItem type={this.state.type} search={this.state.search}></ListItem>
      </WrapContainer>
    );
  }
}
