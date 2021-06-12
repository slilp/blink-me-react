import React, { Component } from "react";
import { BsSearch } from "react-icons/bs";
import { InputSearch, ButtonSearch } from "../../style";

export default class Search extends Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmitSearch}>
        <div className="mx-auto mb-5">
          <div className="d-flex ">
            <div className="col-8 text-right pr-0">
              <InputSearch
                className="text-center"
                onChange={this.props.onChangeSearch}
              ></InputSearch>
            </div>
            <div className="col-4 text-left pl-0">
              <ButtonSearch className="p-2" type="submit">
                <BsSearch className="mr-2"></BsSearch>Search
              </ButtonSearch>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
