import React, { Component } from "react";
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import {  md, sm } from "../../config/break-point";
import { BiChevronLeft, BiChevronRight, BiCoffee } from "react-icons/bi";

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  padding-top: 1rem;
  padding-bottom: 1rem;

  @media (min-width: ${sm}) {
    flex-direction: row;
    height: 3rem;
    padding: 1rem;
  }
`;

const LogoSection = styled.div`
  max-width: 50%;
  text-align: center;

  @media (min-width: ${sm}) {
    max-width: 25%;
  }

  @media (min-width: ${md}) {
    max-width: 15%;
  }
`;

const Logo = styled.img`
  max-width: 70%;
  max-height: 100%;
`;

const NavMenu = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  @media (min-width: ${sm}) {
    flex-direction: row;
  }

  @media (max-width: ${sm}) {
    position: absolute;
    z-index: 10;
    top:2.5rem;
    text-align: center;
    transform: ${(props) => (props.open ?  "translateX(0)"  : "translateX(100%)" )}; ;
    transition: transform 0.3s ease-in-out;

    /* display: ${(props) => (props.open ? null : "none")}; */
  }
`;

const NavLink = styled(Link)`
  font-size: 1.1rem;
  padding: 1rem;
  text-decoration: none;
  cursor: pointer;
  color: black;

  &:hover {
    color: #1919d4;
    font-weight: bold;
    border-bottom: 1px solid blue;
  }
  @media (max-width: ${sm}) {
    width: 50%;
    margin: auto;
    border-bottom: ${(props) => (props.last ? null : "1px solid gray")};
  }
`;

const Burger = styled.div`
  position: absolute;
  padding-right: 0.5rem;
  padding-left: 0.5rem;
  top: 0;
  right: 0;
  cursor: pointer;
  font-size: 2rem;
  display: block;

  @media (min-width: ${sm}) {
    display: none;
  }
`;

const BuyMeCoffeeBtn = styled.button`
  background-color: #4756dd;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  width: 11rem;
  justify-content: space-around;
  cursor: pointer;
  border: transparent;
  border-radius: 25px;
  float: right;
  height: 100%;
  margin: auto;
  &:hover {
    background-color: #4978dd;
  }
`;

const NavRight = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  padding: 1rem;
  height: 2.5rem;
  @media (min-width: ${sm}) {
    padding: 0.25rem;
  }

`;

export default class NavBar extends Component {
  state = {
    isOpen: false,
  };

  openMenu = () => {
    this.setState((state) => ({
      isOpen: !state.isOpen,
    }));
  };

  render() {
    return (
      <Nav>
        <LogoSection>
          <Logo src="https://sevenpeakssoftware.com/wp-content/uploads/2020/07/7P-Logo-RGB_Horizontal-Blue.png"></Logo>
        </LogoSection>
        {this.state.isOpen ? (
          <Burger onClick={this.openMenu}>
            <BiChevronRight></BiChevronRight>
          </Burger>
        ) : (
          <Burger onClick={this.openMenu}>
            <BiChevronLeft></BiChevronLeft>
          </Burger>
        )}
        <NavMenu open={this.state.isOpen}>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/home">UI components</NavLink>
          <NavLink to="/home">Features</NavLink>
          <NavLink to="/home">Use case</NavLink>
          <NavRight>
            <BuyMeCoffeeBtn>
              <BiCoffee fontSize={"1.5rem"}> </BiCoffee>
              <span>Buy me a coffee</span>
            </BuyMeCoffeeBtn>
          </NavRight>
        </NavMenu>
      </Nav>
    );
  }
}
