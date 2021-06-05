import styled from "styled-components";

export const Text = styled.h3`
  font-size: ${(props) => (props.size ? props.size : null)};
  color: ${(props) => (props.color ? props.color : null)};
  font-weight: ${(props) => (props.weight ? props.weight : null)};
  font-family: ${(props) => (props.font ? props.font : null)};
`;
