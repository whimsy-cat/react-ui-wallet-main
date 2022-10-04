import * as React from "react";
import styled from "styled-components";

const SeedText = (props) => (
  <Container style={state.DarkMode && { backgroundColor: "#1a222d" }}>
    <Number>{props.number}</Number>
    <Word>{props.word}</Word>
  </Container>
);

export default SeedText;

const Container = styled.View`
  width: auto;
  border-color: #d9d9d9;
  border-width: 1px;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 8px;
  border-radius: 5px;
  margin: 0 8px 8px 8px;
`;

const Number = styled.Text`
  color: #979797;
`;
const Word = styled.Text`
  margin-left: 5px;
`;
