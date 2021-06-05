import styled from "styled-components"
import { sm } from "../../config/break-point";

export const MainContainer = styled.div`
  max-width: 1920px;
`;

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BigText = styled.h1`
  font-size: ${(props) => (props.size ? `${props.size}rem` : "4rem")};
  text-align: ${(props) => (props.center ? "center" : null)};
  margin: 0;
`;

export const DescriptionText = styled.h3`
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "lighter")};
  text-align: center;
  margin: 0.5rem;
`;

export const MiddleText = styled.h2`
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "lighter")};
  text-align: center;
  margin: 0.5rem;
`;

export const Container = styled.div`
  font-family: "Rubik";
  color: ${(props) => (props.color ? props.color : "black")};
  background: ${(props) => (props.bg ? props.bg : "white")};
  padding: ${(props) => (props.padding ? props.padding : "2rem")};
`;

export const TopSection = styled(Container)`
  display: flex;
  flex-direction: column;
  font-family: "Rubik";
  @media (min-width: ${sm}) {
    flex-direction: row;
  }
  padding-bottom: 4rem;
`;

export const Section = styled.div`
  flex: 1;
  margin: 1rem;
  text-align: ${(props) => (props.center ? "center" : null)};
`;

export const TopImage = styled.img`
  text-align: center;
  width: 40%;
  height: 100%;
`;

export const Border = styled.div`
  height: 0.25rem;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(10, 10, 244, 1) 0%,
    rgba(0, 212, 255, 1) 100%
  );
  width: 50%;
  margin: auto;
`;

export const StatrBtn = styled.button`
  font-size: 1.25rem;
  background-color: #116dff;
  color: white;
  border-radius: 25px;
  padding: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  font-weight: bold;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #4086f6;
    transform: translateY(-2px);
  }
`;

export const Flex = styled.div`
  display: flex;
  font-family: "Rubik";
  flex-direction: column;
  @media (min-width: ${sm}) {
    flex-direction: row;
  }
`;