import * as React from "react";
import styled from "styled-components";

const PhraseWord = (props) => (
  <Container style={props.selected ? { backgroundColor: "#eee" } : { backgroundColor: "white" }}>
    <Number>{props.number}</Number>
    <Word style={props.selected ? { color: "#555" } : { color: "black" }}>{props.word}</Word>
    <Close>{props.close}</Close>
  </Container>
);

export default PhraseWord;

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
const Close = styled.Text`
  margin-left: 5px;
  color: #888;
`;
