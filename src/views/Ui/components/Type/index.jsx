import React, { Component } from "react";
import { ButtonType, Icon } from "../../style";
import {
  BoostrapIcon,
  MaterialUiIcon,
  CssIcon,
  HeartIcon,
} from "../../../../style/icons";

const iconList = {
  all: HeartIcon,
  boostrap: BoostrapIcon,
  materialui: MaterialUiIcon,
  css: CssIcon,
};

export default class Type extends Component {
  state = {
    type: this.props.type,
  };

  render() {
    return (
      <div className="col-md-3 col-6 p-1">
        <ButtonType
          className="text-left text-md-center"
          select={this.state.type === this.props.typeSelected ? true : false}
          onClick={() => this.props.onChangeType(this.state.type)}
        >
          <Icon
            src={!this.state.type ? iconList["all"] : iconList[this.state.type]}
            className="mr-2"
          ></Icon>
          {this.props.name}
        </ButtonType>
      </div>
    );
  }
}
