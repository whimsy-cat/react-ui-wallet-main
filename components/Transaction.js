import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { View, Switch } from "react-native";
import styled from "styled-components";
import { Context } from "../reducers/store";

const Transaction = (props) => {
  const { Type, Address, Amount } = props;
  const [isEnabled, setIsEnabled] = useState(true);
  const [state, dispatch] = useContext(Context);

  return (
    <View
      style={
        state.DarkMode
          ? {
              width: "109%",
              paddingRight: 30,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottomWidth: 1,
              borderBottomColor: "#222",
            }
          : {
              width: "109%",
              paddingRight: 30,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottomWidth: 1,
              borderBottomColor: "#eee",
            }
      }
    >
      <TokenName>
        <Token>
          <Name style={state.DarkMode && { color: "#fff" }}>{Type}</Name>
          <TransAddress style={state.DarkMode && { color: "#fff" }}>
            {Address}
          </TransAddress>
        </Token>
      </TokenName>

      <TokenCol2>
        <TokenAmount
          style={
            Type == "Recieved" ? { color: "#00ff77" } : { color: "#ff7733" }
          }
        >
          {Type == "Recieved" ? `+${Amount}` : `-${Amount}`}
        </TokenAmount>
      </TokenCol2>
    </View>
  );
};

export default Transaction;

const TokenLeft = styled.View`
  width: 85%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const TokenRight = styled.View``;
const Token = styled.View`
  flex-direction: column;
`;
const TokenName = styled.View`
  flex-direction: row;
  padding: 20px 20px 20px 0;
  margin-left: 15px;
`;
const Image = styled.Image`
  width: 30px;
  height: 30px;
  background-color: #fff;
  border-radius: 20px;
  border-width: 1px;
  border-color: #fff;
`;
const Name = styled.Text`
  font-size: 18px;
  margin-left: 16px;
`;

const TransAddress = styled.Text`
  font-size: 13px;
  margin-left: 16px;
  color: #878787;
`;

const TokenAmount = styled.Text`
  font-size: 18px;
`;
const TokenSymbol = styled.Text`
  font-size: 18px;
  margin-left: 5px;
`;
const TokenSymbol1 = styled.Text`
  margin-left: 10px;
  color: #979797;
  font-size: 16px;
`;
const TokenCol2 = styled.View`
  flex-direction: row;
  align-items: center;
  margin-right: 30px;
`;
