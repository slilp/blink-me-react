import React from "react";
import { BsSearch } from "react-icons/bs";
import { InputSearch, ButtonSearch } from "../../style";

function Search({ onSubmitSearch, onChangeSearch }) {
  return (
    <form onSubmit={onSubmitSearch}>
      <div className="mx-auto mb-5">
        <div className="d-flex ">
          <div className="col-8 text-right pr-0">
            <InputSearch
              className="text-center"
              onChange={onChangeSearch}
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

export default Search;
